import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import employeeRoute from './Routes/employeeRoute.js';



//config
dotenv.config();
const app=express();

//middleware
app.use(express.json());
app.use
(cors({
    origin:"*",
    credentials:true
})
);

//DB connection
connectDB();


//default route
app.get("/",(req,res)=>{
res.status(200).send("welcome to employee profile management system")

});


//api route
app.use("/api/employee",employeeRoute);


//running port1
app.listen(process.env.PORT,()=>{
    console.log("app is started and running in the port");
});