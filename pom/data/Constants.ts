const dotenv = require('dotenv')
dotenv.config()

export const CREDENTIALS= {
    EMAIL: process.env.EMAIL,
    PASSWORD:"WizeQTest22$",
    INVALID_EMAIL: 'wizeq-tests123@wizeline.com',
    INVALID_PASSWORD: 'Abcder13452'
}

export const URLS ={
    LOGIN: 'https://questions-develop.wizeline.com/login'
}