import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
