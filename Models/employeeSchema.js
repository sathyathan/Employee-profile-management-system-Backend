import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
     firstname:String,
     lastname:String,
     designation:String,
     role:String,
     email:String,
     password:String,
     present:String,
     absent:String,
     location:String,
     current:String,
     saving:String,
     intern:String,
     junior:String,
     senior:String,

     
})
const Employee=mongoose.model("Employee",employeeSchema);
export default Employee;