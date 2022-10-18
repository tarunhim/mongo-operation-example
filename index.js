import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }));

app.get("/",async(req,res) => {
    try{
        res.status(200).send("welcome");
        res.end();
    } catch(error) {
        res.status(400).send(error.message);
    }
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log("server is running on "+PORT));

