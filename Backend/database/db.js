import mongoose from "mongoose";

const db = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        dbName: "RESTO1",
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
};

export default db;