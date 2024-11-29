const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, enum: ['Admin', 'User', 'Moderator'] },
    permissions: { type: [String], default: [] },
});

module.exports = mongoose.model('Role', roleSchema);
