import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  providerId: String,
  email: String,
  name: String,
  provider: String,
});

export default mongoose.model('User', userSchema);
