import express from 'express'
const router = express.Router()
import {
    getEmployeeById,
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    serchEmployee
} from '../controllers/employeeControllers.js'
router.route('/').get(getEmployees).post(createEmployee)
router
    .route('/:id')
    .get(getEmployeeById)
    .put(updateEmployee)
    .delete(deleteEmployee)
router.route('/searchRecord/:firstname').get(serchEmployee)
export default router
