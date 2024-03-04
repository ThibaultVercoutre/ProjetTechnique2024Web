var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World!");
}));
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
