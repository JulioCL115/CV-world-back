const { MercadoPagoConfig, Payment, Preference, } = require("mercadopago");
const { ACCES_TOKEN } = process.env
const {User} = require('../../db')
const axios = require('axios');
const Sequelize = require('sequelize');
const accessToken = ACCES_TOKEN

const createPayment = async (req, res) => {
    const client = new MercadoPagoConfig({
        accessToken: ACCES_TOKEN
    });
    const { userId } = req.params;
    const { tittle, description, quantity, unit_price } = req.body;
    const preference = new Preference(client);
    try {
        const body = {
            items: [
                {
                    tittle,
                    description,
                    quantity,
                    unit_price,
                    currency_id: "USD",
                },
            ],

            back_urls: {
                success: `http://localhost:${process.env.PORT}/success`,
                failure: `http://localhost:${process.env.PORT}/failure`,
                pending: `http://localhost:${process.env.PORT}/pending`,
            },
      
            notification_url: `https://856a-2-57-171-45.ngrok-free.app/webhook/${userId}`,
        };

    const response = await preference.create({ body });

    console.log(response);

    res.json(response.init_point);
    // res.json({id: response.id})
    }catch (error) {
        res.json(error);
    }
};

const processedWebhooks = new Set();

const receiveWebhooks = async (req,res) => {
    const { userId } = req.params;
    const payment = req.query;
    const idKeyString = userId.toString();

    try {
        console.log( "este es el payment," ,payment);
        console.log( "esta es el id", idKeyString);
        if(payment.type === "payment" &&  payment['data.id']){
            const paymentId = payment['data.id']; 

            if (processedWebhooks.has(paymentId)) {
                console.log("Webhook ya procesado. Ignorando...");
                return res.send("Webhook ya procesado");
            }
            const response = await User.findByPk(idKeyString);
            const mercadoPagoResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${payment['data.id']}`, {
                headers: {
                    Authorization: `Bearer TEST-1127404855878397-021315-d22d177cf405ab6d16972fd357795017-1680068297`
                }
            });
            await User.update(
                {suscription : true},{ where: { id: response.id}}
            ); 
            processedWebhooks.add(paymentId);
  
            console.log(mercadoPagoResponse)
            console.log("prueba depues", payment)
            console.log("esta es la response" , response)
            res.send("webhook")
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

module.exports = {
  createPayment,
  receiveWebhooks
}
const { MercadoPagoConfig, Preference, } = require("mercadopago");
const { ACCES_TOKEN } = process.env
const { User } = require('../../db')
const axios = require('axios');

const createPayment = async (req, res) => {

  const client = new MercadoPagoConfig({
    accessToken: ACCES_TOKEN
  });

  const { idKey } = req.params;
  const { title, description, quantity, unit_price } = req.body;
  const preference = new Preference(client);

  try {
    const body = {
      items: [
        {
          title,
          description,
          quantity,
          unit_price,
          currency_id: "USD",
        },
      ],
      back_urls: {
        success: "http://localhost:3001/success",
        failure: "http://localhost:3001/failure",
        pending: "http://localhost:3001/pending",
      },
      notification_url: `https://856a-2-57-171-45.ngrok-free.app/webhook/${idKey}`,
    };

    const response = await preference.create({ body });

    res.json(response.init_point);

    // res.json({id: response.id})
  } catch (error) {
    console.log("ERROR: ", error);
    res.json(error);
  }
};

const processedWebhooks = new Set();

const receiveWebhooks = async (req, res) => {
  const { idKey } = req.params;
  const payment = req.query;
  const idKeyString = idKey.toString();

  try {
    console.log("este es el payment,", payment);
    console.log("esta es el id", idKeyString);

    if (payment.type === "payment" && payment['data.id']) {
      const paymentId = payment['data.id'];

      if (processedWebhooks.has(paymentId)) {
        console.log("Webhook ya procesado. Ignorando...");
        return res.send("Webhook ya procesado");
      }

      const response = await User.findByPk(idKeyString);
      await axios.get(`https://api.mercadopago.com/v1/payments/${payment['data.id']}`, {
        headers: {
          Authorization: `Bearer TEST-1127404855878397-021315-d22d177cf405ab6d16972fd357795017-1680068297`
        }
      });

      await User.update(
        { suscription: true }, { where: { id: response.id } }
      );
      processedWebhooks.add(paymentId);
      res.send("webhook")
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}


module.exports = {
  createPayment,
  receiveWebhooks
}