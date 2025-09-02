const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

app.use(express.json());

const mongoUrl = "mongodb://root:password@localhost:27017";

async function start() {
  const client = new MongoClient(mongoUrl);
   try {
     await client.connect();
     console.log("Successfully connected to MongDB");
     db = client.db("zoo_db");
     animalsCollection = db.collection("animals");
     app.get("/animals", async (req, res) => {
       const animals = await animalsCollection.find().toArray();
       res.json(animals);
     });

    app.listen(PORT, () => {
      console.log("Server started at http://localhost:3000");
    });

   } catch (error) {
     console.log("Error: connection to DB");
   }
}

start();

//npm start - запустить приложение
//STRG + C - остановка приложения
