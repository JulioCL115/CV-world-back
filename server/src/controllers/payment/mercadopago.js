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
  const {idKey} = req.params;
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
        success: "http://localhost:4000/success",
        failure: "http://localhost:4000/failure",
        pending: "http://localhost:4000/pending",
      },
      
      notification_url: `https://856a-2-57-171-45.ngrok-free.app/webhook/${idKey}`,
    };
    const response = await preference.create({ body });
    console.log(response);
    res.json(response.init_point);
    // res.json({id: response.id})
  } catch (error) {
    res.json(error);
  }
};

const processedWebhooks = new Set();

const receiveWebhooks = async (req,res) => {
    const {idKey} = req.params;
    const payment = req.query;
    const idKeyString = idKey.toString();
    try{
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
            // {compras: Sequelize.literal( `"compras" || ARRAY['${JSON.stringify(mercadoPagoResponse.data)}']::json[]`) },
            // { where: { id: response.id } },
            {suscription : true},{ where: { id: response.id}}
          ); 
            // console.log("este es mercado status",mercadoPagoResponse.data.status)
            processedWebhooks.add(paymentId);
          // if(mercadoPagoResponse.data.status === "approved"){
          //   const remove = await CartItem.destroy({ where: { idUser: idKeyString } })
          //   console.log("eliminando",remove)
          // }
          console.log(mercadoPagoResponse)
        console.log("prueba depues", payment)
        console.log("esta es la response" , response)
        //const record = await Record.create({ userId: response.id });
        res.send("webhook")
    }
  }catch(error){
    console.log(error)
    res.status(500).json({error: error.message})
  }
}



// const receiveWebhooks = async (req, res) => {
//   const payment = req.query
//   try {
//     if (payment.type === 'payment') {
//       const paymentInfo = await axios.get(`https://api.mercadopago.com/v1/payments/${payment.id}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}` // Replace 'ACCES_TOKEN' with 'accessToken'
//         }
//       });
//       console.log('webhook-------------------------------------------------------')
//       console.log(paymentInfo.data)
//       res.status(200).json(paymentInfo.data)
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log('Payment not found');
//       res.sendStatus(404);
//     } else {
//       console.log(error);
//       res.status(500).json({ error: error.message });
//     }
//   }
// }


module.exports = {
  createPayment,
  receiveWebhooks
}