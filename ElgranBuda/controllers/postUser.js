/**
 * Este archivo contiene la lógica para el registro de usuarios en la base de datos
 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const {user, password} = req.body;
    const player =  new User({
        user: user,
        password: password
    });
    try {
        const newPlayer = await player.save();
        console.log(`Usuario registrado: ${newPlayer}`);
        res.status(200).json({newPlayer});
        userName = player.user;
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(`Error: ${error.message}`);
    }
});

module.exports = router;