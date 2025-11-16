import mongoose from "mongoose";
import dotenv from "dotenv";
const uri="mongmongodb+srv://tanmayofficial0703_db_user:myfirstdb@cluster0.7svuwhr.mongodb.net/?appName=Cluster0"

// const uri = process.env.uri;
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(uri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
