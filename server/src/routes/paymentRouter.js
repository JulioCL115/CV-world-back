const { Router } = require('express');
const router = Router();
const { createPayment, receiveWebhooks } = require('../controllers/payment/mercadopago');

const verifyToken = require('../middlewares/verifyToken');

router.post('/create-order/:userId', verifyToken, createPayment);

router.get('/success', (req, res) => {
    res.redirect('https://cv-world-front-gamma.vercel.app/success');
});

router.get('/failure', (req, res) => {
    res.redirect('https://cv-world-front-gamma.vercel.app/failure');
});

router.get('/pending', (req, res) => {
    res.redirect('https://cv-world-front-gamma.vercel.app/pending'); 
});

router.post('/webhook/:userId/:subscriptionId', receiveWebhooks);

module.exports = router;

