const {Router} = require('express')
const router = Router()

const {createPayment, receiveWebhooks} = require('../controllers/payment/mercadopago')


router.post('/create-order', createPayment)
router.get('/success', (req,res) =>{
    res.send("Pago exitoso")
})
router.get('/failure', (req,res)=>{
    res.send("Pago fallido")
})
router.get('/pending', (req,res) =>{
    res.send("Pago pendiente")
})
router.post('/webhook/:idKey', receiveWebhooks)

module.exports = router