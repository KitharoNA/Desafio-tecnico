const express = require('express');
const router = express.Router();
const Communication = require('../models/Communication');

// Agendamento de envio de comunicação
router.post('/communications', async (req, res) => {
    console.log('Dados recebidos:', req.body);
    try {
      const newCommunication = new Communication(req.body);
      const savedCommunication = await newCommunication.save();
      res.status(201).json({ message: 'Agendamento realizado com sucesso!', communicationId: savedCommunication._id });
    } catch (error) {
      console.error('Erro ao salvar no MongoDB:', error); // Log do erro
      res.status(500).json({ error: 'Erro ao agendar comunicação' });
    }
  });  

router.get('/communications/:id', async (req, res) => {
  try {
    const communication = await Communication.findById(req.params.id);

    if (!communication) {
      return res.status(404).json({ message: 'Comunicação não encontrada' });
    }

    res.status(200).json({
      communication,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar comunicação' });
  }
});

router.patch('/communications/:id/cancel', async (req, res) => {
    try {
      const communication = await Communication.findById(req.params.id);
  
      if (!communication) {
        return res.status(404).json({ message: 'Comunicação não encontrada' });
      }
  
      // Altera o status para "cancelado"
      communication.status = 'cancelado';
      await communication.save();
  
      res.status(200).json({
        message: 'Comunicação cancelada com sucesso',
        communicationId: communication._id,
      });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cancelar comunicação' });
    }
  });

module.exports = router;
