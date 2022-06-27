import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import BlogPost from './blogPostModel.js'
import cors from 'cors'

// to use environment varables
dotenv.config()

const app = express();

//middle ware
app.use(express.json());
app.use(cors());

// Connecting to database
mongoose
  .connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
  )
  .then(() => {
    // listening on port 3000
    app.listen(process.env.PORT, () => {
      console.log("Listening on PORT ", process.env.PORT);
    });
    
  })
  .catch((err) => {
    console.log(err);
  });



// Different routes
app.get("/", async (req,res)=>{
    try {
      const blogPosts = await BlogPost.find({});
      res.status(200).json(blogPosts);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
});


app.post("/", async (req,res)=>{
  const post = req.body;
  try {
    const savedPost = await BlogPost.create(post);
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/:id", async (req,res)=>{
  const id = req.params.id;
  try{
    const post = await BlogPost.findById(id);
    res.status(200).json(post);
  }catch (err) {
    res.status(400).json({ error: err.message });
  }

});

app.patch("/:id", async(req,res)=>{
  const id = req.params.id;
  const post = req.body;
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(id,post);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/:id", async(req,res)=>{
  const id = req.params.id;
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.patch("/:id/upvote", async (req,res)=>{
  const id = req.params.id;
  try {
    const currentPost = await BlogPost.findById(id);  
    const updatedPost = await BlogPost.findByIdAndUpdate(id,{upvote:currentPost.upvote+1});
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


