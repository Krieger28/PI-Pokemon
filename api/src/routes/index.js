const { Router } = require('express');
const { Pokemon , Type } = require('../db');
const axios = require("axios");
const { allApiData } = require('../controllers/pokemon');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.get('/', async (req, res) => {
    res.status(200).send(await allApiData())
})


module.exports = router;
