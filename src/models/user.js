import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 4,
      max: 30,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      min: 4,
      max: 30,
      required: true,
      unique: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      default: 'USER',
      uppercase: true
    },
    firstname: {
      type: String,
      min: 4,
      max: 30
    },
    lastname: {
      type: String,
      min: 4,
      max: 30
    },
  },
  {
    collection: 'Users'
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
