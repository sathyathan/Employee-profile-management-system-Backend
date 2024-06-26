import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
     firstname:String,
     lastname:String,
     designation:String,
     role:String,
     email:String,
     password:String,

     
})
const Employee=mongoose.model("Employee",employeeSchema);

export default Employee;