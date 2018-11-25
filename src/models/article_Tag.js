import mongoose, { Schema } from 'mongoose';

const Article_Tag_Schema = new Schema(
  {
    articleId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Article',
    },
    tagId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Tag'
    }
  },
  {
    collection: 'Articles_Tags'
  }
);

const Article_Tag = mongoose.model('Article_Tag', Article_Tag_Schema);

export default Article_Tag;
