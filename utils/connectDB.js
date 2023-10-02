import mongoose from "mongoose";
export default async function Connect() {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect('mongodb+srv://aliasgharshahneh1380:12345@cluster0.nbakisu.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected To DB');
    } catch (error) {
        console.log(error);
        console.log('Failed To Connect DB!');
    }
}