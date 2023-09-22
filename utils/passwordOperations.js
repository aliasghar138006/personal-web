import { compare } from "bcryptjs";
import { verify } from "jsonwebtoken";


export async function CompairPassword(password , hashPassword){
    try {
        const verifyPassword = await compare(password , hashPassword);
        return verifyPassword;
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export function VerifyToken(token , secretKey){
    try {
        const verifyToken = verify(token , secretKey);
        return verifyToken;
    } catch (error) {
        console.log(error);
        return false;
    }
}