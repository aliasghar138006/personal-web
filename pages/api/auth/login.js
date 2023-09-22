import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import PersonalUsers from "models/PersonalUser";
import Connect from "utils/connectDB";
import { CompairPassword } from "utils/passwordOperations";

export default async function handler(req , res){
    if (req.method !== 'POST'){
        return;
    }

    const {user , password} = req.body;
    if(!user || !password){
        res.status(422).json({status:'failed' , message:'Invalid Data!'});
        return;
    }

    await Connect();
    const newUser = await PersonalUsers.findOne({userName : user})
    if(!newUser){
        res.status(404).json({status:'faild' , message:'Not Found User!'});
        return;
    }

    

    const verifyPassword = await CompairPassword(password , newUser.password);
    if(!verifyPassword){
        res.status(422).json({status:'failed' , message:'userName Or Password incorrect!'})
        return;
    }

    const token = await sign({user} , process.env.SECRET_KEY);
    const serialized = serialize("token" , token , {httpOnly:true , maxAge:99999999, path:"/"})
    console.log(token);
    res.status(200).setHeader("Set-Cookie" ,serialized ).json({status:'success' , message:'Login' , data:newUser})
    
}