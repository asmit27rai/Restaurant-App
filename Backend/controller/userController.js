import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    try {
        const { fullName, username, password, confPass } = req.body;
        if (!fullName || !username || !password || !confPass) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "Username already exit try different" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName,
            username,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const login = async (req,res) =>{
    try{
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message:"All Sections Are Mandatory"});
        };
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                message:"Incorrect UserName Or Password",
                success:false
            });
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect UserName Or Password",
                success:false
            });
        };


        return res.status(201).json({
            message: "Login successfully.",
            success: true
        });
    }catch(err) {
        console.log(err);
    }
};