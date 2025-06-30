import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  linkedinId: String,
  displayName: String,
  email: String,
  photo: String
});

export const User = mongoose.model('User', userSchema);

