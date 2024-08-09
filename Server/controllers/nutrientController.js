const { literal } = require("sequelize");
const { User, Nutrition, Profile, } = require("../models");

class nutrientController {

    static async readNutrient(req, res) {
        try {
            const id = req.loginInfo.UserId

            const data = await Nutrition.findOne({
                where: {
                    id
                }
            })

            if (!data) throw { name: "notFound" }


            res.status(200).json({
                data
            })

        } catch (error) {
            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })

        }
    }

    static async addProtein(req, res) {
        try {
            const id = req.loginInfo.UserId
            const { protein, day } = req.body

            console.log(req.body);


            const data = await Nutrition.update(
                {
                    protein: literal(`protein + ${protein}`)
                },
                {
                    where: {
                        id: id
                    }
                }
            );

            if (!data) throw { name: "notFound" }


            res.status(200).json({
                message: "Success Add Protein!"
            })

        } catch (error) {
            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })

        }
    }

    static async addCalorie(req, res) {
        try {
            const id = req.loginInfo.UserId
            const { calorie, day } = req.body

            console.log(req.body);


            const data = await Nutrition.update(
                {
                    calorie: literal(`calorie + ${calorie}`)
                },
                {
                    where: {
                        id: id
                    }
                }
            );

            if (!data) throw { name: "notFound" }


            res.status(200).json({
                message: "Success Add Protein!"
            })

        } catch (error) {
            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })

        }
    }

    static async nextDay(req, res) {
        try {

            const id = req.loginInfo.UserId

            await Nutrition.update({
                day: literal(`day + 1`), protein:0, calorie:0
            }, {
                where: {
                    UserId: id
                }
            })

            const data = await Nutrition.findByPk(id)

                res.status(200).json({
                    message:"success next day",
                    data:data
                })


        } catch (error) {
            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })
        }
    }


}

module.exports = nutrientController