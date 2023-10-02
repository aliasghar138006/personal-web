import { VerifyToken } from "utils/passwordOperations";

export default async function handler(req , res){
    if(req.method !== 'GET') return;
    const {token} = req.cookies;
    if(!token){
        res.status(401).json({status : 'failed' , message:'unauturaize'});
        return;
    }

    const SECRET_KEY = 'e73f1ece5087b8a5ae33998952202202';
    
    const verifyToken = VerifyToken(token , SECRET_KEY);
    if(!verifyToken){
        res.status(401).json({status:'failed' , message:'token Not Correct!'});
        return;
    }
    res.status(200).json({status:'success' , message:'OK'})
}