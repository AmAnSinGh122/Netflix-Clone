import {User} from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid Data",
                sucess:false,
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"User does not exist",
                sucess:false,
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Password",
                sucess:false,
            })
        }
        const tokenData ={
            id:user._id
        }
        const token = await jwt.sign(tokenData, "jdfhkjsd", {expiresIn:"1d"});
        
        return res.status(200).cookie("token", token, {httpOnly:true}).json({
            message:`Welcome back ${user.fullName}`,
            user,
            sucess:true,
        })


    } catch (error) {
        console.log(error);
    }
}

export const Logout = async (req,res)=>{
    return res.status(201).cookie("token", "", {expiresIn: new Date(Date.now()),httpOnly:true}).json({
        message:"User logged out sucessfully",
        sucess:true,
    })
}


export const Register = async (req,res) =>{
    try {
        const {fullName ,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid Enteries",
                sucess:false,
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"User already exists",
                sucess:false,
            })
        }

        const hashedPassword =await bcryptjs.hash(password, 15)

        await User.create({
            fullName,
            email,
            password: hashedPassword,
        })

        return res.status(201).json({
            message:"Account created sucessfully",
            sucess:true,
        })

    } catch (error) {
        console.log(error);
    }
};