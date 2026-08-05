const express = require('express');

const {
    getEspecialidades,
    createEspecialidad,
    deleteEspecialidad
} = require('../controllers/especialidad.controller');

const router = express.Router();

router.get('/', getEspecialidades);
router.post('/', createEspecialidad);
router.delete('/:id', deleteEspecialidad);

module.exports = router;