const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [{
        productId: {type: String, required: true},
        quantity: {type: String, default:1},
    }],
    address: {type: String, required: true},
    amount: {type: String, required: true},
    status: {type: String, required: true},
},{timestamps: true});
mongoose.models= {}
export default mongoose.model('Order', OrderSchema);