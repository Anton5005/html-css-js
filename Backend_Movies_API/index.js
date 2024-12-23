// // D:/studing/html+css+js/Backend_Movies_API/
// // │
// // ├── node_modules/         # Сюди нічого не пишемо
// // ├── .env                  # Тут зберігаються креденшали
// // ├── .gitignore
// // ├── package.json          # Інформація про залежності проекту
// // ├── index.js              # Головний файл проекту
// // └── script.js             # Ваші інші файли коду
// // // examle ()

import dotenv from 'dotenv';
dotenv.config();


console.log('Username:', MONGO_USERNAME);
console.log('Password:', MONGO_PASSWORD);


import app from  "./server.js"
import mongodb from "mongodb"
import { MongoClient } from 'mongodb';
const { mongodb } = require('mongodb');


import ReviewsDAO from "./dao/reviewsDAO.js"


import { MongoClient } from "mongodb";

const MongoClient = mongodb.MongoClient
const MONGO_USERNAME = process.env["MONGO_USERNAME"];
const MONGO_PASSWORD = process.env["MONGO_PASSWORD"];

// const uri = 
// `mongodb+srv://${MONGO_USERNAME}:
// ${MONGO_PASSWORD}@cluster0.mlcfl.
// mongodb.net/`

// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.mlcfl.mongodb.net/?retryWrites=true&w=majority`

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.mlcfl.mongodb.net/`;


const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client =>{
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })



























































// import { MongoClient } from "mongodb";

// const MONGO_USERNAME = process.env["MONGO_USERNAME"];
// const MONGO_PASSWORD = process.env["MONGO_PASSWORD"];

// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.mlcfl.mongodb.net/`;

// console.log(`KU`);

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas");
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// run();
