import mongoose, { Schema } from 'mongoose';

const SubTopicSchema = new Schema(
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
    collection: 'SubTopics'
  }
);

const SubTopic = mongoose.model('SubTopic', SubTopicSchema);

export default SubTopic;
