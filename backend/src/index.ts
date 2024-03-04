// import * as http from "http";
import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();


const hostname = "127.0.0.1";
const port = 5000;

const app = express(); 

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req: Response, res: any) => {
  res.send("Hello World!");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});