import { VerifyToken } from "utils/passwordOperations";
import PersonalUser from "models/PersonalUser";
import Connect from "utils/connectDB";
export default async function handler(req , res){
    if(req.method !== 'GET') return;
    

    const {token} = req.cookies;
    const {user} = await VerifyToken(token , process.env.SECRET_KEY)
    
    await Connect();

    const newUser = await PersonalUser.findOne({userName : user});

    if(!newUser){
        return res.status(401).json({status:'failed' , message:'user Not found!'})
    }

    

    res.status(200).json({status:'success' , message:'get Data', data:newUser})
}