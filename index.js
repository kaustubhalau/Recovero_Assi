import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import posts from "./posts.js";


const app = express();

//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());



dotenv.config();
const PORT = 5000;

const rateLimiterUsingThirdParty = rateLimit({
    windowMs: 60000, // 1 min in milliseconds
    max: 19,
    message: 'You have exceeded the 19 requests in 1 min limit!', 
    standardHeaders: true,
    legacyHeaders: false,
  });

app.get('/getData',rateLimiterUsingThirdParty,(req,res) => {
    res.send({
        status: "Success",
        posts:posts
    })
})


app.listen(PORT,() => console.log("Listening on port 5000"));
