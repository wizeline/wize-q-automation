const dotenv = require('dotenv')
dotenv.config()

export const CREDENTIALS= {
    EMAIL: process.env.EMAIL,
    PASSWORD:process.env.PASSWORD,
    INVALID_EMAIL: 'wizeq-tests123@wizeline.com',
    INVALID_PASSWORD: 'Abcder13452'
}

export const URLS ={
    LOGIN: 'https://questions-develop.wizeline.com/login'
}

export const LOCATIONS = {
    GDL: 'Guadalajara',
    REMOTE_MX: 'Remote - México'
}

export const DEPARTMENT = {
    IDK: "I don't know whom to assign it."
}

export const USERS = {
    ANONYMOUS: "Anonymous",
    STANDAR: "Standar"
}