const { MercadoPagoConfig, Payment, Preference } = require("mercadopago");
const mercadopago = require("mercadopago");
const {ACCES_TOKEN} = process.env

const createPayment = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: ACCES_TOKEN});
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
        success: "http://localhost:4000/success",
        failure: "http://localhost:4000/failure",
        pending: "http://localhost:4000/pending",
      },
      notification_url: "http://localhost:4000/webhook",
    };
    
    const response = await preference.create({ body });
    console.log(response);
    res.json(response.init_point)
    // res.json({id: response.id})
  } catch (error) {
    res.json(error);
  }
};

