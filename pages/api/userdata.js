import { VerifyToken } from "utils/passwordOperations";
import PersonalUser from "models/PersonalUser";
import Connect from "utils/connectDB";
export default async function handler(req , res){
    if(req.method !== 'GET') return;
    

    const userName = process.env.NEXT_PUBLIC_USERNAME;
    // console.log(userName);
    await Connect();

    const newUser = await PersonalUser.findOne({userName : userName});

    if(!newUser){
        return res.status(401).json({status:'failed' , message:'user Not found!'})
    }

    

    res.status(200).json({status:'success' , message:'get Data', data:newUser})
}