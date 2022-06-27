import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tags from './Tags';
import { Link } from 'react-router-dom';

function AllBlogs() {
    // to use state
  const [blogs,setBlogs] = useState([]);

  
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get('http://localhost:8080');
      console.log(response.data)
      setBlogs(response.data);
    }
    fetchData();
  },[]);
  return (
    <div className='all-blogs'>
        <div className='blogs'>
            {blogs.map((blog)=>(
            <div key={blog._id} className='blog'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <Tags tags={blog.tags}/>
                <h4>{blog.upvote}</h4>
                <h5>Published by - {blog.creator}</h5>
                <Link to={`/update/${blog._id}`}>Edit</Link>
            </div>
        ))}</div>
    </div>
  )
}

export default AllBlogs