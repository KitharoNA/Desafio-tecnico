const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/desafio_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const agendamentoSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    email: String,
    datahora: Date,
    forma: String,
    mensagem: String,
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/agendar', async (req, res) => {
    const { email, datahora, forma, mensagem } = req.body;

    const gerarId = () => {
        return Math.floor(10000 + Math.random() * 90000).toString(); 
    };

    let novoId;
    do {
        novoId = gerarId();
    } while (await Agendamento.findOne({ id: novoId }));

    const novoAgendamento = new Agendamento({
        id: novoId,
        email,
        datahora,
        forma,
        mensagem,
    });

    try {
        await novoAgendamento.save();
        res.status(201).send(`Agendamento salvo com sucesso! ID: ${novoId}`);
    } catch (error) {
        res.status(500).send('Erro ao salvar agendamento: ' + error.message);
    }
});

app.post('/consultar', async (req, res) => {
    const { id } = req.body;

    try {
        const agendamento = await Agendamento.findOne({ id });
        if (!agendamento) {
            return res.status(404).send('Agendamento não encontrado.');
        }
        res.status(200).json(agendamento);
    } catch (error) {
        res.status(500).send('Erro ao consultar agendamento: ' + error.message);
    }
});

app.post('/cancelar', async (req, res) => {
    const { id } = req.body;

    try {
        const resultado = await Agendamento.findOneAndDelete({ id });
        if (!resultado) {
            return res.status(404).send('Agendamento não encontrado para cancelamento.');
        }
        res.status(200).send('Agendamento cancelado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao cancelar agendamento: ' + error.message);
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
