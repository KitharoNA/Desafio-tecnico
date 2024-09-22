const mongoose = require('mongoose');

const communicationSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  message: { type: String, required: true },
  sendAt: { type: Date, required: true },
  type: { type: String, enum: ['email', 'sms', 'push', 'whatsapp'], required: true },
  status: { type: String, enum: ['agendado', 'cancelado'], default: 'agendado' },
}, { timestamps: true });

module.exports = mongoose.model('Communication', communicationSchema);
