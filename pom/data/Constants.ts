const dotenv = require('dotenv')
dotenv.config()

export const CREDENTIALS= {
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    INVALID_EMAIL: 'wizeq-tests123@wizeline.com',
    INVALID_PASSWORD: 'Abcder13452'
}

export const URLS = {
    LOGIN: 'https://questions-develop.wizeline.com/login',
}

export const LOCATIONS = {
    GDL: 'Guadalajara',
    REMOTE_MX: 'Remote - México'
}

export const DEPARTMENT = {
    IDK: "I don't know whom to assign it.",
    ACADEMY: "Academy"
}

export const USERS = {
    ANONYMOUS: "Anonymous",
    STANDAR: "Standar",
}

export const MESSAGES = {
    QUESTION_CREATED: "The question has been created succesfully!",
    ANON_QUESTION_CREATED: "The anonymous question has been created succesfully!"
}

export const QUESTIONS = {
    USER_NAME: "WizeQ Test User",
    QUESTION_TEST: "This is a test question...??",
    TIME: "a few seconds ago"
}

export const TEXTS = {
    Q_DETAILS_TEXT: "Things to keep in mind"
}

export const PEOPLE = {
    ACADEMY: "Carolina Navarro",
    NA: ""
}