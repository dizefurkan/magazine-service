import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      min: 4,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    articleId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Article'
    }
  },
  {
    collection: 'Comments'
  }
);

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
