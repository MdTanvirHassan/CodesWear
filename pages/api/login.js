import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
try {
    if (req.method == "POST") {
      let user = await User.findOne({ "email": req.body.email })
      const bytes  = CryptoJS.AES.decrypt(user.password, 'secret1234');
      let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedPass) {
            res.status(200).json({success: true,email: user.email, name: user.name});
            }
            else{
                res.status(200).json({ success: false, error: "Invalid email or password." });
            }   
        }
      else {
        res.status(200).json({ success: false, error: "No User Found!" });
      }
    } else {
        res.status(400).json({ error: "error! This method is not allowed." });
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      }
};

export default connectDb(handler);
