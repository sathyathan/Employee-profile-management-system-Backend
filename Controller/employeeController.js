import Employee from '../Models/employeeSchema.js';
import bcrypt from 'bcryptjs';

export const registerEmployee= async(req,res)=>{
try{
    console.log(req.body);
const{firstname,lastname,email,batch,role,designation,password}=req.body
const hashPassword=await bcrypt.hash(password,10);
const newEmployee=new Employee({Emp_firstname:firstname,Emp_lastname:lastname,Email:email,Emp_batch:batch,Emp_role:role,Emp_designation:designation,Password:hashPassword})
await newEmployee.save();
res.status(200).json({message:"employee register successfully",data:newEmployee});
}
catch(error){
console.log(error);
res.status(500).json({message:"registeration failed due to internal server error"});
}
}
export const loginEmployee= async(req,res)=>{
    try{
        console.log(req.body);
    const {email,password}=req.body
    const employeeDetail=await Employee.findOne({Email:email})
    console.log(employeeDetail);
    if(!employeeDetail){
        return res.status(401).json({message:"employee not found"});
    }
    const PasswordMatch=await bcrypt.compare(password,employeeDetail.Password);
    console.log(PasswordMatch);
    if(!PasswordMatch){
        return res.status(401).json({message:"employee not found"});
    }
    res.status(200).json({message:"employee logged successfully"});
  }
  catch(error){
    console.log(error);
    res.status(500).json({message:"login failed due to internal server error"});
    }
    }

    export const createEmployee = async (req, res) => {
      try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(200).json({
          message: "Employee Created Successfully",
          result: [newEmployee],
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "Internal server error in create employee" });
      }
    };
    
    export const getEmployee = async (req, res) => {
      try {
        const employee = await Employee.find();
        res.status(200).json({
          message: "Employee Retrieved Successfully",
          result: employee,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error in get employee" });
      }
    };
    
    export const getEmployeeById = async (req, res) => {
      try {
        const empId = req.params.id;
        const employee = await Employee.findById(empId);
        if (!employee) {
          res.status(404).send("Employee Not Found");
        }
        res.status(200).json({
          message: "Employee Retrieved Successfully",
          result: employee,
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "Internal server error in getbyid employee" });
      }
    };
    
    export const updateEmployee = async (req, res) => {
      try {
        const empId = req.params.id;
        const {
            Emp_FirstName,
            Emp_LastName,
            Email,
            Emp_batch,
            Emp_designation,
            Emp_role,
            Password,
        } = req.body;
        const results = await Employee.updateOne(
          { _id: empId },
          {
            Emp_FirstName,
            Emp_LastName,
            Email,
            Emp_batch,
            Emp_designation,
            Emp_role,
            Password,

          }
        );
        if (results.matchedCount === 0) {
          return res.status(404).json({ message: "Employee Not Found" });
        }
        const updatedEmployee = await Employee.find({ _id: empId });
        res.status(200).json({
          message: "Employee Updated Successfully",
          result: updatedEmployee,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error in edit employee" });
      }
    };
    
    export const deleteEmployee = async (req, res) => {
      try {
        const empId = req.params.id;
        const deleteEmp = await Employee.deleteOne({ _id: empId });
        if (!deleteEmp) {
          return res.status(404).send("Employee Not Found");
        }
        res.status(200).json({ message: "Employee Deleted Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error in Delete employee");
      }
    };