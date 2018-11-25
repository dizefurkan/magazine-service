import mongoose, { Schema } from 'mongoose';

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      min: 4,
      max: 30,
      required: true,
    },
    subtitle: {
      type: String,
      min: 4,
    },
    content: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    state: {
      type: String,
      default: 'DRAFT'
    },
    slug: {
      type: String,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    moderatorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    collection: 'Articles'
  }
);

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
