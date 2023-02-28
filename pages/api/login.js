import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
try {
    if (req.method == "POST") {
      let user = await User.findOne({ "email": req.body.email })

        if (user) {
            if (req.body.email == user.email && req.body.password == user.password) {
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
