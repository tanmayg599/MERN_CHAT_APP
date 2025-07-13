import mongoose from "mongoose";
import dotenv from "dotenv";
// const uri="mongodb+srv://tanmay7016403222:myfirstdb@cluster0.b1cjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const uri = process.env.uri;
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(uri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
