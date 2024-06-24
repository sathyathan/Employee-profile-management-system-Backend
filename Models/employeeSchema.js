import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({

     Emp_firstname:String,
     Emp_lastname:String,
     Email:String,
     Emp_batch:String,
     Emp_designation:String,
     Emp_role:String,
     Password:String,
})
const Employee=mongoose.model("Employee",employeeSchema);

export default Employee;