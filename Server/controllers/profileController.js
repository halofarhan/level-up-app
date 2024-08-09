const { User, Nutrition, Profile, Exercise } = require("../models");
const { GoogleGenerativeAI } = require('@google/generative-ai');

class profileController{
    static async readProfile(req,res){
        try {
        
            const id = req.loginInfo.UserId
            const data = await Profile.findByPk(id)

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

    

    static async handleProfile(req, res) {
        try {

            const id = req.loginInfo.UserId
            const { username, height, weight, gender, age, program } = req.body

            const register = await Profile.create({
                username, height, weight, gender, age, program, UserId: id
            })

            if (!gender || !height || !weight || !age || !program) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const genAI = new GoogleGenerativeAI("AIzaSyD_HRlVKbS1C_WAs6VFduEGq9Va3Cg5-cQ");

            const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

            const prompt = `tolong hitungkan kalori protein dan kalori harian yang dibutuhakn untuk orang yang memiliki gender = ${register.gender}, tinggi = ${register.height}, berat badan = ${register.weight}, umur = ${register.age}, dan ingin melakukan ${register.program}. tampilkan hanya angka yang dibutuhkan tanpa gram dan beri dalam bentuk array, index 0 untuk protein dan index 1 untuk kalori`

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const arrayResult = JSON.parse(text);

            const nutrition = await Nutrition.create({
                UserId: id,
                proteinNeeds: arrayResult[0],
                calorieNeeds: arrayResult[1]
            })

            await User.update({
                isProfile: true
            }, {
                where: {
                    id
                }
            })

            const oneUser = await User.findByPk(id)

            res.status(201).json({
                message: "Success Register",
                username: register.username,
                YourCalorieNeed: nutrition.calorieNeeds,
                YourProteinNeeds: nutrition.proteinNeeds,
                isProfile: oneUser.isProfile
            });

        } catch (error) {
            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            res.status(status).json({
                message
            })

        }
    }

    static async readUser(req,res){
        try {

            const id = req.loginInfo.UserId

            const data = await User.findByPk(id)
            
            res.status(200).json({
                data
            })

        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports = profileController