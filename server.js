import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import connect from "./db/db.js"

import authRoutes from "./routes/auth.routes.js";


dotenv.config();

connect();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://inbotiq-assignment-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.send("hello");
});

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

