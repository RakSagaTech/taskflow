import bcrypt from "bcryptjs";
import User from"../models/user.model";
import generateToken from "../utils/generateToken";


export const registerUserController = async (req, res) => {
  try {

    const {
      username,
      email,
      password
    } = req.body;


    const existingUser = await User.findOne({
      $or: [
        { username },
        { email }
      ]
    });


    if (existingUser) {
      return res.status(409).json({
        message: "Username or email already exists",
      });
    }


    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });


    const token = generateToken(user);


    return res.status(201).json({
      message: "User registered successfully",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};



export const loginUserController = async (req,res)=>{
  try{

    const {
      username,
      password
    } = req.body;


    const user = await User.findOne({
      username
    }).select("+password");


    if(!user){
      return res.status(401).json({
        message:"Invalid credentials"
      });
    }


    const isPasswordValid =
      await bcrypt.compare(
        password,
        user.password
      );


    if(!isPasswordValid){
      return res.status(401).json({
        message:"Invalid credentials"
      });
    }


    const token = generateToken(user);


    return res.status(200).json({
      message:"Login successful",
      data:{
        user:{
          id:user._id,
          username:user.username,
          email:user.email,
          role:user.role,
        },
        token,
      }
    });


  }catch(error){

    console.error(error);

    return res.status(500).json({
      message:"Internal server error"
    });

  }
};