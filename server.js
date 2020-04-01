const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('session');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }))

massive(process.env.CONNECTION_STRING)
    .then((databaseVariable)=>{
        app.set('db', databaseVariable);
        console.log('Db is connected');
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));