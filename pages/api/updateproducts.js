// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

    const handler = async (req, res) => {
    if(req.method == "POST"){
        for(let i=0; i<req.body.length; i++){
        let p= await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
        res.status(200).json({ success: "success!" });
    }
    else{
        res.status(200).json({ error: "error! This method is not allowed." });
    }
        let products = await Product.find()
    
  }
  export default connectDb(handler);