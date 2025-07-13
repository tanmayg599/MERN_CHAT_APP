import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		// Extract token from cookies or Authorization header
		const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];

		// Check if token exists
		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		// Fetch user from database (excluding password)
		const user = await User.findById(decoded.userId).select("-password");
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		// Attach user to request object
		req.user = user;
		next();
	} catch (error) {
		console.error("❌ Error in protectRoute middleware:", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export default protectRoute;
