import mongoose, { Schema } from 'mongoose';

const TagSchema = new Schema(
  {
    name: {
      type: String,
      min: 4,
      max: 30,
      required: true,
    }
  },
  {
    collection: 'Tags'
  }
);

const Tag = mongoose.model('Tag', TagSchema);

export default Tag;
