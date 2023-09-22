import mongoose from "mongoose";
export default async function Connect() {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.BASE_URL);
        console.log('Connected To DB');
    } catch (error) {
        console.log(error);
        console.log('Failed To Connect DB!');
    }
}