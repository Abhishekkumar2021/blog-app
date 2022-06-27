import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Update() {
  const id = useParams().id;
  const [blog,setBlog] = useState({});

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get(`http://localhost:8080/${id}`);
      console.log(response.data)
      setBlog(response.data);
    }
    fetchData();
  },[id]);
  return (
    <form>
        <input type='text' value={blog.title}/>
        <textarea  value={blog.description}/>
        {/* <input type='text' value={blog.title}/> */}
        <input type='text' value={blog.creator}/>
        <button>Save</button>
    </form>
  )
}

export default Update