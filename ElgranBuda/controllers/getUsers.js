/**
 * Este archivo contiene la lógica del endpoint para obtener usuarios de la base de datos
 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Muestra los usuarios de la base de datos
router.get('/users', async (req, res) => {
  try {    
    const users = await User.find(req.params);       
    res.status(200).json({
        users            
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message,
      stack: error.stack
    });
  }
});

// Muestra un usuario en especifico
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Cambia el estado de activo a true de un usuario en especifico
router.patch('/users/:id', async (req, res) => {
  try {
    const updateOne = await User.updateOne( { _id: req.params.id }, {
      $set: { active: true }
    });
    res.status(200).json(updateOne);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
