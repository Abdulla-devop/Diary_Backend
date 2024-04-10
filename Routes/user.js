import express from "express"
import bcrypt from "bcrypt"
import { getUserByEmail } from "../Controller/user.js";
import { generateToken } from "../Auth/auth.js";
import User from "../models/user.js";
const router = express.Router();

router.post("/login", async(req,res)=>{
    try {
        const user = await getUserByEmail(req);
        if(!user){
            return res.status(400).json({error:"User not found"})
        }
        //validating password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if(!validPassword){
            return res.status(400).json({error:"Invalid password"})
        }
        //generate token
        const token = generateToken(user._id)
        res.status(200).json({message:"Logged in successfully",token})
    } catch (error) {
        console.log("error",error)
        res.status(500).json({error:"Internal server error"})
    }
})

router.post("/singup",async(req,res)=>{
    try {
        let user = await getUserByEmail(req);
        if(user){
           return res.status(400).json({error:"User already exist"})
        }
        //generate hashedtoken
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        user = await new User({
            ...req.body,
            password:hashedPassword,
        }).save()
        const token = generateToken(user._id)
        res.status(201).json({data:user,token})
    } catch (error) {
        console.log("error",error)
        res.status(500).json({error:"Internal server error"})
    }
})


export const userRouter = router;