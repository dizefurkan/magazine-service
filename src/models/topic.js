import mongoose, { Schema } from 'mongoose';

const TopicSchema = new Schema(
  {
    name: {
      type: String,
      min: 4,
      max: 30,
      required: true,
    },
    slug: {
      type: String,
    },
  },
  {
    collection: 'Topics'
  }
);

const Topic = mongoose.model('Topic', TopicSchema);

export default Topic;
