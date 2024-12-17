// D:/studing/html+css+js/Backend_Movies_API/
// │
// ├── node_modules/         # Сюди нічого не пишемо
// ├── .env                  # Тут зберігаються креденшали
// ├── .gitignore
// ├── package.json          # Інформація про залежності проекту
// ├── index.js              # Головний файл проекту
// └── script.js             # Ваші інші файли коду
// // examle ()

require('dotenv').config();

// console.log('Username:', MONGO_USERNAME);
// console.log('Password:', MONGO_PASSWORD);


import app from  "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"


const MongoClient = mongodb.MongoClient
const MONGO_USERNAME = process.env["MONGO_USERNAME"];
const MONGO_PASSWORD = process.env["MONGO_PASSWORD"];
const uri = 
`mongodb+srv://${MONGO_USERNAME}:
${MONGO_PASSWORD}@cluster0.mlcfl.
mongodb.net/`


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














