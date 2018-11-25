import mongoose, { Schema } from 'mongoose';

const Topic_SubTopic_Schema = new Schema(
  {
    topicId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Topic',
    },
    subTopicId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'SubTopic'
    }
  },
  {
    collection: 'Topics_SubTopics'
  }
);

const Topic_SubTopic = mongoose.model('Topic_SubTopic', Topic_SubTopic_Schema);

export default Topic_SubTopic;
