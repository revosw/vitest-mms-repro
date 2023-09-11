import mongoose from "mongoose"

// Define the User schema
export const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create the User model using the schema
export const model = mongoose.model('user', schema);
