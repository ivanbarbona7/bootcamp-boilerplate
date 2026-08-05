const mongoose = require('mongoose');

const especialidadSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la especialidad es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción de la especialidad es obligatoria']
    }
}, {
    timestamps: true
});

especialidadSchema.set('toJSON', {
    transform: (documento, especialidadRetorno) => {
        especialidadRetorno.id = especialidadRetorno._id;
        delete especialidadRetorno._id;
        delete especialidadRetorno.__v;
    }
});

module.exports = mongoose.model('Especialidad', especialidadSchema);