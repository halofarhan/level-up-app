const { compare } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, Nutrition, Profile } = require("../models");
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { OAuth2Client } = require('google-auth-library');

class userController {

    static async handleRegister(req, res) {
        try {
            const { email, password } = req.body

            const register = await User.create({
                email, password
            })

            res.status(201).json({
                message: "Success Register",
                email: register.email
            });

        } catch (error) {

            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            if (error.name == 'SequelizeValidationError') {
                status = 400
                message = error.errors[0].message
            }

            res.status(status).json({
                message
            })

        }
    }

    static async handleLogin(req, res) {
        try {
            const { email, password } = req.body
  
            if (!email || !password) throw { name: "Bad Request" }

            const login = await User.findOne({
                where: {
                    email
                }
            })

            if (!login) throw { name: "notFound" }

            const isPasswordValid = compare(password, login.password)

            if (!isPasswordValid) throw { name: "loginError" }

            const payload = {
                id: login.id,
                email: login.email,
            }

            const access_token = signToken(payload)

            res.status(200).json({
                message: `Success Login, Welcome!`,
                isMember: login.isMember,
                isProfile: login.isProfile,
                access_token
            })

        } catch (error) {
            console.log(error);

            let status = 500
            let message = 'Internal Server Error'

            if (error.name == 'InvalidLogin') {
                message = 'Please input email or password'
                status = 401
            }

            if (error.name == 'loginError') {
                message = 'Invalid email or password'
                status = 401
            }

            res.status(status).json({
                message
            })
        }

    }

    static async loginGoogle(req, res) {
        try {
            const { token } = req.headers
            console.log(token);
            

            const client = new OAuth2Client();

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();

            const [user, created] = await User.findOrCreate({
                where: {
                    email: payload.email
                },
                defaults: {
                    email: payload.email,
                    password: "password_default",
                    isMember: false,
                    isProfile: false
                },
                hooks: false
            })

            const data = await User.findOne({
                where:{
                    email:payload.email
                }
            })

            const access_token = signToken({
                id: user.id,
                email: user.email,
            })

            res.status(200).json({ access_token, data })
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

module.exports = userController