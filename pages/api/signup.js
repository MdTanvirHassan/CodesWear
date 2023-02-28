import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    //await connectDb();
    if (req.method === "POST") {
      const u = new User(req.body);
      await u.save();
      res.status(200).json({ success: "success!" });
    } else {
      res.status(400).json({ error: "error! This method is not allowed." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export default connectDb(handler);
