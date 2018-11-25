import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
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
    isEmailValid: {
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
    slug: {
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
