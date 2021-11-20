import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import employees from './data/EmployeeData.js'
import Employee from './model/employeeModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // To clear all existing data in the database
        await Employee.deleteMany()

        // // Make admin the objectID for all products (temporary)
        // const createdUsers = await User.insertMany(users)

        // const adminUser = createdUsers[0]._id

        // map to add the adminUser to each of the products
        const sampleEmployess = employees.map(employee => {
            return { ...employee }
        })

        await Employee.insertMany(sampleEmployess)
        // await Product.insertMany(sampleProducts)

        console.log('Data imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // To clear all existing data in the database
        await Employee.deleteMany()

        console.log('Data destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
