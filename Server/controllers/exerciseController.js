const { User, Nutrition, Profile, Exercise } = require("../models");

class exerciseController{

    static async readProgram(req,res){
        try {

            const data = await Exercise.findAll()

            res.status(200).json({
                data
            })

        } catch (error) {

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })
           
        }
    }

    static async readProgramById(req,res){
        try {
            const id = req.params.id
            const data = await Exercise.findByPk(id)

            res.status(200).json({
                data
            })

        } catch (error) {

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })
           
        }
    }

}

module.exports = exerciseController