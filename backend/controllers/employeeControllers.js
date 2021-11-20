import asyncHandler from 'express-async-handler'
import Employee from '../model/employeeModel.js'

// @desc    Fetch all employees
// @route   GET /api/employess
// @access  public
const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find({})
    res.json(employees)
})

// @desc    Fetch single employee
// @route   GET /api/employees/:id
// @access  public
const getEmployeeById = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    if (employee) {
        res.json(employee)
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

// @desc    Create a employee
// @route   POST /api/employees
// @access  public
const createEmployee = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, phone, salary } = req.body
    const employ = new Employee({
        firstname,
        lastname,
        email,
        phone,
        salary
    })

    const createdEmployee = await employ.save()
    res.status(201).json(createdEmployee)
})

// @desc    Update Employee
// @route   PUT /api/employee/:id
// @access  private/admin
const updateEmployee = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, phone, salary } = req.body

    const employee = await Employee.findById(req.params.id) // id is in the URL

    if (employee) {
        employee.firstname = firstname
        employee.lastname = lastname
        employee.email = email
        employee.phone = phone
        employee.salary = salary

        const updatedEmployee = await employee.save()
        res.json(updatedEmployee)
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

// @desc    Delete a employee
// @route   DELETE /api/employees/:id
// @access  private
const deleteEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    if (employee) {
        await employee.remove()
        res.json({ message: 'Employee removed' })
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

// @desc    search a employee
// @route   GET /api/employees/:id
// @access  private
const serchEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.find({
        firstname: req.params.firstname
    })
    if (employee) {
        res.json(employee)
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

export {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    serchEmployee
}
