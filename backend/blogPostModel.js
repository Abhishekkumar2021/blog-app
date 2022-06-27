import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  fileUpload: String,
  upvote: {
    type: Number,
    default: 0,
  },
  creator: String,
},{timestamps:true});
const BlogPost = mongoose.model("blogarticle", blogSchema);

export default BlogPost;