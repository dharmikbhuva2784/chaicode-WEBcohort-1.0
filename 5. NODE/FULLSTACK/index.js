import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()
const app = express();

app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: ['GET', 'POST', 'PUT','OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

app.use(express.json()); //if we want to give key value pair as input
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send('Cohort Se Aaye Hai!');
});

app.get("/dharmik", (req, res) => {
  res.send('dharmik');
});

app.get('/manav', (req,res) => {
    res.send("manav!")
});

app.get("/kusum", (req,res) => {
    res.send("kusum maa!")
});

app.get("/hitesh", (req,res) => {
    res.send("hitesh adda!");
});

// connect to db
db();

//user routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});