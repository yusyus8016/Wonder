const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//Controladores
const {saveCountry, viewCountry, viewOneCountry, editCountry, deleteCountry} = require("./controllers/Country.controller.js");


const app = express();
const port = 3002;

app.use(morgan("dev"));//Utilizando morgan
app.use(cors());
app.use(express.json())


async function BDconnection() {
    try{
        //Conectando a la base de datos
        await mongoose.connect(process.env.MONGODB_URL);
        
        console.log("Conectado a la base de datos");
    }catch (error){
        console.log("Erro al conectarse a la base de datos: " + error);
    }
}

BDconnection();

// app.get("/usuarios", (req, res) => res.send("Hola mundo"));
// app.get("/tareas", (req, res) => res.send("Lista de tareas desde el servidor"));

app.post("/country", saveCountry);
app.get("/country", viewCountry);
app.get("/country/:code", viewOneCountry);
app.put("/country/:code", editCountry);
app.delete("/country/:code", deleteCountry);

app.listen(port, () => console.log(`Servidor ejecutándose en: http://localhost:${port}/country`));