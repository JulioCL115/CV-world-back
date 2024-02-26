const { MercadoPagoConfig, Preference, } = require("mercadopago");
const { ACCESS_TOKEN } = process.env

const { User, Subscription } = require('../../db')
const axios = require('axios');

const createPayment = async (req, res) => {

  const client = new MercadoPagoConfig({
    accessToken: ACCESS_TOKEN
  });

  const { userId } = req.params;

  const { title, description, quantity, unit_price, subscriptionId } = req.body;
  console.log("esta es el id de la subscripcion back", subscriptionId);
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
      notification_url: `https://6994-186-118-231-184.ngrok-free.app/webhook/${userId}/${subscriptionId}`,
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
  const { userId, subscriptionId } = req.params;
  const payment = req.query;
  const userIdString = userId.toString();

  try {
    console.log("este es el payment,", payment);
    console.log("esta es el id", userIdString);
    console.log("esta es el id de la subscripcion", subscriptionId);

    if (payment.type === "payment" && payment['data.id']) {
      const paymentId = payment['data.id'];

      if (processedWebhooks.has(paymentId)) {
        console.log("Webhook ya procesado. Ignorando...");
        return res.send("Webhook ya procesado");
      }

      await axios.get(`https://api.mercadopago.com/v1/payments/${payment['data.id']}`, {
        headers: {
          Authorization: `Bearer TEST-2735218977605833-012419-e6d876a59733cd50c1253ffd9c89fa90-1651807239`
        }
      });
      const userFound = await User.findByPk(userIdString);
      console.log("Usuario encontrado:", userFound);

      const subscriptionFound = await Subscription.findByPk(subscriptionId);
      console.log("Subscripción encontrada:", subscriptionFound);

      const updateResult = await User.update(
        { SubscriptionId: subscriptionFound.id },
        { where: { id: userFound.id } }
      );
      console.log("Resultado de la actualización:", updateResult);

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
