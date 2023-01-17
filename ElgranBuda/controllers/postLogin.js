/**
 * Este archivo contiene la lógica para el ingreso de los usuarios en la aplicación
 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Verifica el ingreso exitoso o fallido con base a los datos existentes en la base de datos
router.post('/lobby', async (req, res) => {
    const { user, password } = req.body;
    User.findOne({ user }, (err, user) => {
        if (err) {
            res.status(500).send('Registro fallido del usuario');
        } else if (!user) {
            res.status(500).send('Usuario inexistente');
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    res.status(500).send('Fallo de autenticación');
                } else if (result) {
                    res.status(200).send('Usuario autenticado con éxito');
                    userName = user.user;
                    return userName;
                } else {
                    res.status(400).send('Usuario o contraseña incorrecta');
                }
            });
         }
    });
});

module.exports = router;