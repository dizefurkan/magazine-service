import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
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
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'USER',
      uppercase: true,
    },
    firstname: {
      type: String,
      min: 4,
      max: 30,
    },
    lastname: {
      type: String,
      min: 4,
      max: 30,
    },
  },
  {
    collection: 'Users',
  },
);

const User = mongoose.model('User', UserSchema);

export default User;
