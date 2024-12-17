import express from "express";

import filmRouter from "./routes/films";

const app = express();
let cptGet = 0;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((_req, _res, next) => {
    if(_req.method === "GET")   //Check if it's a methode GET
        cptGet++
    console.log("GET counter : ", cptGet);
    next();
  });


app.use("/films", filmRouter);


export default app;
