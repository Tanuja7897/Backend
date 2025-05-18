let User = require("../models/user")
const bcrypt = require("bcrypt");

async function createUser(req, res) {
    let { name, email, password } = req.body
    try {

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "please try again and ensure to enter all required fields! "
            })
        }
        //drawing error in new way finding from db 
        const finduser = await User.findOne({ email })
        if (finduser) {
            return res.status(400).json({
                message: "User already exist"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name,
            email,
            password: hashPassword
        });
        res.status(200).json({
            success: true,
            message: "Created successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error Occured while creating users",
            error: err.message
        })
    }
}

async function Login(req, res) {
    let { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "please try again and ensure to enter all required fields! "
            })
        }

        const finduser = await User.findOne({ email })
        if (!finduser) {
            return res.status(400).json({
                message: "Please signin first"
            })
        }

        let comparePassword = await bcrypt.compare(
            password ,
            finduser.password 
        )
        if(!comparePassword){
           return res.status(200).json({
            success: true,
            message: "incorrect password"
            })   
        }
        res.status(200).json({
            success: true,
            message: "user profile"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error Occured while creating users",
            error: err.message
        })
    }
}

async function getAllUser(req, res) {
    try {
        const users = await User.find({}) //all users 
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            users
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error Occured while retriving users"
        })
    }
}

async function getById(req, res) {
    try {
        let user = await User.findById(req.params.id);
        //can use also 
        //let user = await User.findOne({id = id})  first id is db id and second id is req se aai id
        //two things 
        //1. id = output as only stirng format so we should use this only
        //2. _id = output as object
        if (!user) {
            return res.status(500).json({
                success: false,
                message: "users not found",
            })
        }
        return res.status(200).json({
            success: true,
            message: "users retrived successfully",
            users: { user }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error Occured while retriving users by id"
        })
    }
}

async function update(req, res) {

    try {
        let { name, password, email } = req.body;
        await User.findByIdAndUpdate(req.params.id, { name, password, email }) //of{id : id} because key-val is same can use this also
        return res.status(200).json({
            success: true,
            message: "updated successfully"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "error occur while updating user details"
        })
    }
}

async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: "deletd successfully"
        })
    } catch (err) {
        return res.json({
            success: false,
            message: "error occur while deleting the user"
        })
    }
}
module.exports = { createUser, getAllUser, getById, update, deleteUser, Login };