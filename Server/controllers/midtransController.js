const midtransClient = require('midtrans-client');
const { User, Nutrition, Profile } = require("../models");

class midtransController {

    static async tokenMidtrans(req,res) {
        try {
            console.log("halooo");
            
            const bookPrice = 75000
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: "SB-Mid-server-1sAsNVKw5daN1MR_vjpdssHp"
            });

            const orderId = `payment-${Date.now()}-${Math.floor(Math.random() * 1000)}`

            let parameter = {
                "transaction_details": {
                    "order_id": orderId,
                    "gross_amount": bookPrice
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "email": req.loginInfo.email,
                }
            };

            const token = await snap.createTransaction(parameter)
            console.log(token);
            

            res.status(200).json({
                transaction_token: token.token,
                orderId
            })

        } catch (error) {
            console.log(error);
            
        }
    }

    static async changeIsMember(req,res){
        try {
            
            const id = req.loginInfo.UserId

            await User.update({
                isMember:true
            },{
                where: {
                    id
                }
            })

        } catch (error) {
            
            console.log(error);
            
        }
    }
}

module.exports = midtransController