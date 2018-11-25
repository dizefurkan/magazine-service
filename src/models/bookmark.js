import mongoose, { Schema } from 'mongoose';

const BookmarkSchema = new Schema(
  {
    userId: {
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
    collection: 'Bookmarks'
  }
);

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

export default Bookmark;
