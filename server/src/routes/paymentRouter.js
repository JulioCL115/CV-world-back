const { Router } = require('express');
const router = Router();
const { createPayment, receiveWebhooks } = require('../controllers/payment/mercadopago');

const verifyToken = require('../middlewares/verifyToken');

router.post('/create-order/:userId', verifyToken, createPayment);

router.get('/success', (req, res) => {
    res.redirect('http://localhost:3000/success');
});

router.get('/failure', (req, res) => {
    res.redirect('http://localhost:3000/failure');
});

router.get('/pending', (req, res) => {
    res.redirect('http://localhost:3000/pending'); 
});

router.post('webhook/:userId', receiveWebhooks);

module.exports = router;

