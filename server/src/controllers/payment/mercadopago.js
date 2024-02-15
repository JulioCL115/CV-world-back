const mercadopago = require('mercadopago')

const createOrder = async(req,res) =>{
    mercadopago.configure({
        access_token : "TEST-1127404855878397-021315-d22d177cf405ab6d16972fd357795017-1680068297"
    })

    const result = await mercadopago.preferences.create({
        items : [
            {
                tittle: 'Laptop Lenovo',
                unit_price: 100,
                currency_id : 'ARS',
                quantity: 1,
            }
        ]
    })
    console.log(result)
}