// D:/studing/html+css+js/Backend_Movies_API/
// │
// ├── node_modules/         # Сюди нічого не пишемо
// ├── .env                  # Тут зберігаються креденшали
// ├── package.json          # Інформація про залежності проекту
// ├── index.js              # Головний файл проекту
// └── script.js             # Ваші інші файли коду
// // examle ()

// import { MONGO_USERNAME, MONGO_PASSWORD } from "./cred.js";


// console.log(`MongoDB Username: ${MONGO_USERNAME}`);
// console.log(`MongoDB Password: ${MONGO_PASSWORD}`);

require('dotenv').config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

console.log('Username:', MONGO_USERNAME);
console.log('Password:', MONGO_PASSWORD);


// import app from  "./server.js"
// import mongodb from "mongodb"
// import ReviewsDAO from "./dao/reviewsDAO.js"


// const MongoClient = mongodb.MongoClient
// const mongo_username = MONGO_USERNAME
// const mongo_password = MONGO_PASSWORD

















