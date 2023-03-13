import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  try {
    //await connectDb();
    if (req.method == "POST") {
      const {name, email} = req.body;
      const u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, 'secret1234').toString()});
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
