import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: Number,
            required: true
        },
        salary: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Employee = mongoose.model('Employee', employeeSchema)

export default Employee
