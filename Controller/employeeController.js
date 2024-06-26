import Employee from '../Models/employeeSchema.js';
import bcrypt from 'bcryptjs';

export const registerEmployee= async(req,res)=>{
try{
    console.log(req.body);
const{firstname,lastname,designation,role,email,password}=req.body
const hashPassword=await bcrypt.hash(password,10);
const newEmployee=new Employee({firstname,lastname,designation,role,email,password:hashPassword});
await newEmployee.save();
return res.status(200).json({message:"employee register successfully",data:newEmployee});
}
catch(error){
console.log(error);
return res.status(500).json({message:"registeration failed due to internal server error"});
}
}
export const loginEmployee= async(req,res)=>{
    try{
        console.log(req.body);
    const {email,password}=req.body
    const employeeDetail=await Employee.findOne({email})
    console.log(employeeDetail);
    if(!employeeDetail){
        return res.status(401).json({message:"employee not found"});
    }
    const passwordMatch=await bcrypt.compare(password,employeeDetail.password);
    console.log(passwordMatch);
    if(!passwordMatch){
        return res.status(401).json({message:"employee not found"});
    }
    return res.status(200).json({message:"employee logged successfully"});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:"login failed due to internal server error"});
    }
    }


    export const createEmployee = async (req, res) => {
        try {
          const newEmployee = new Employee(req.body);
          await newEmployee.save();
          return res.status(200).json({
            message: "Employee Created Successfully",
            result: [newEmployee],
          });
        } catch (error) {
          console.log(error);
          return res
            .status(500)
            .json({ message: "Internal server error in create employee" });
        }
      };
      
      export const getEmployee = async (req, res) => {
        try {
          const employee = await Employee.find();
          return res.status(200).json({
            message: "Employee Retrieved Successfully",
            result: employee,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error in get employee" });
        }
      };
      
      export const getEmployeeById = async (req, res) => {
        try {
          const empId = req.params.id;
          const employee = await Employee.findById(empId);
          if (!employee) {
            return res(200).json({
            message: "Employee Retrieved Successfully",
            result: employee,
          });
        } }
        catch (error) {
          console.log(error);
          return res
            .status(500)
            .json({ message: "Internal server error in getbyid employee" });
        }
        };
      
      export const updateEmployee = async (req, res) => {
        try {
          const empId = req.params.id;
          const {
              firstname,
              lastname,
              designation,
              role,
              email,
              password,
          } = req.body;
          const results = await Employee.updateOne(
            { _id: empId },
            {
              firstname,
              lastname,
              designation,
              role,
              email,
              password,
  
            }
          );
          if (results.matchedCount === 0) {
            return res.status(404).json({ message: "Employee Not Found" });
          }
          const updatedEmployee = await Employee.find({ _id: empId });
          return res.status(200).json({
            message: "Employee Updated Successfully",
            result: updatedEmployee,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error in edit employee" });
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
          return res.status(500).send("Internal Server Error in Delete employee");
        }
      };
