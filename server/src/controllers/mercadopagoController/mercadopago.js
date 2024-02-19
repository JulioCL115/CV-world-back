const { MercadoPagoConfig, Payment, Preference } = require("mercadopago");
const mercadopago = require("mercadopago");
const {ACCES_TOKEN} = process.env

const createPayment = async (req, res) => {
    const client = new MercadoPagoConfig({
        accessToken: ACCES_TOKEN}
    );
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
            notification_url: `http://localhost:${process.env.PORT}/webhook`,
        };
    
        const response = await preference.create({ body });
        console.log(response);
        res.json(response.init_point)
        // res.json({id: response.id})
    } catch (error) {
        res.json(error);
    }
};

const processedWebhooks = new Set();

const receiveWebhooks = async (req, res) => {
    const { userId } = req.params;
    const payment = req.query;
    const idKeyString = userId.toString();

    try{
        console.log( "este es el payment," ,payment);
        console.log( "esta es el id", userId);
        if(payment.type === "payment" &&  payment['data.id']){
            const paymentId = payment['data.id']; 

            if (processedWebhooks.has(paymentId)) {
                console.log("Webhook ya procesado. Ignorando...");
                return res.send("Webhook ya procesado");
            }
            const response = await User.findByPk(userId);
            const mercadoPagoResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${payment['data.id']}`, {
                headers: {
                    Authorization: `Bearer TEST-2735218977605833-012419-e6d876a59733cd50c1253ffd9c89fa90-1651807239`
                }
            });
            await User.update(
                {compras: Sequelize.literal( `"compras" || ARRAY['${JSON.stringify(mercadoPagoResponse.data)}']::json[]`) },
                { where: { id: response.id } }
            ); 
            console.log("este es mercado status",mercadoPagoResponse.data.status)
            processedWebhooks.add(paymentId);
            if(mercadoPagoResponse.data.status === "approved"){
                const remove = await CartItem.destroy({ where: { idUser: idKeyString } })
                console.log("eliminando",remove)
            }
            console.log(mercadoPagoResponse)
            console.log("prueba depues", payment)
            console.log("esta es la response" , response)
            // const record = await Record.create({ userId: response.id });
            res.send("webhook")
        }
    } catch(error){
        console.error(error);
        res.status(500).json({
            error: "Error al procesar el webhook",
        });
    }
}

const getDataPayment = async (req, res) => {
    try {
        const { userId } = req.params;
        const response = await User.findOne({ where: { id: userId } });
        console.log("esta es la response " ,response.compras)
        if (response ) {
            const result = response.compras;
            const data = result.map((pay) => ({
                date: pay.date_approved,
                status: pay.status,
                title: pay.title,
                amount: pay.transaction_amount,
                method: pay.payment_method_id,
                type: pay.payment_type_id,
            }));
            res.json(data);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener datos de pago:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


module.exports = {
  createPayment,
};
