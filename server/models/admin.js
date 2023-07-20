const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // email: {
  //   type: String,

  // },
  password: {
    type: String,
    required: true,
    minLength: 5,
  }
},
{

})

adminSchema.pre('save',async function(next) {
  if (this.isNew || this.isModified('password')){
    // console.log(process.env.SALT);
    // const salt = JSON.stringify(process.env.SALT);
    // console.log(salt);
    this.password = await bcrypt.hash(this.password, 11);
  }
  next();
});

adminSchema.methods.verifyPassword = async function(password){
  return bcrypt.compare(password,this.password);
}

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;