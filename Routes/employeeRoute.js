import express,{Router} from "express";
import { loginEmployee,registerEmployee,createEmployee,getEmployee,getEmployeeById,updateEmployee,deleteEmployee} from "../Controller/employeeController.js";

const router=express.Router();

router.post('/register-employee',registerEmployee);
router.post('/login-employee',loginEmployee);
router.post("/createemployee", createEmployee);
router.get("/getallemployee", getEmployee);
router.get("/getemployee/:id", getEmployeeById);
router.put("/updateemployee/:id", updateEmployee);
router.delete("/deleteemployee/:id",deleteEmployee);


export default router;