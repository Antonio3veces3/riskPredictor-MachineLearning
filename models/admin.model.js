const {Schema, model}= require('mongoose');
const AdminSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true
    },
    password:{
        type: Schema.Types.String,
        required: true
    }
});



const AdminModel = model("Admin", AdminSchema);
module.exports = {AdminModel};