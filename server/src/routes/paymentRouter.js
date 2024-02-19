const express = require('express');
const router = express.Router();
const { createPayment, receiveWebhooks } = require('../controllers/payment/mercadopago');
const verifyToken = require('../middlewares/verifyToken');

router.post('/create-order/:userId', createPayment);

router.get('success', (req, res) =>{
    res.send("Pago exitoso")
});

router.get('failure', (req, res)=>{
    res.send("Pago fallido")
});

router.get('pending', (req, res) =>{
    res.send("Pago pendiente")
});

router.post('webhook/:userId', receiveWebhooks);

module.exports = router;