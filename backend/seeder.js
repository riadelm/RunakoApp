import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB() 

const importData = async () => {
    try{
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(products => {
            return {...products, user: adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log("Data Imported!")
        process.exit()
    }catch (error){
        console.log(error)
        process.exit(1)
    }
    
}

const destroyData = async () => {
    try{
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        console.log("Data Destroyed!")
        process.exit()
    }catch (error){
        console.log(error)
        process.exit(1)
    }
    
}

process.argv[2] === '-d'? destroyData() : importData()
