import express,{Router} from "express";
import { loginEmployee,registerEmployee,attendanceEmployee,locationEmployee,accountEmployee,emptype,createEmployee,getEmployee,getEmployeeById,updateEmployee,deleteEmployee} from "../Controller/employeeController.js";

const router=express.Router();

router.post('/register-employee',registerEmployee);
router.post('/login-employee',loginEmployee);
router.post('/attendance-employee',attendanceEmployee);
router.post('/location-employee',locationEmployee);
router.post('/account-employee',accountEmployee);
router.post('/emp-type',emptype);
router.post("/createemployee", createEmployee);
router.get("/getallemployee", getEmployee);
router.get("/getemployee/:id", getEmployeeById);
router.put("/updateemployee/:id", updateEmployee);
router.delete("/deleteemployee/:id",deleteEmployee);


export default router;