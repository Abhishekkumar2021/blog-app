import React from 'react'

function Tags({tags}) {
  return (
    <div>
        {tags.map((tag)=>(
            <h4 key={tag}>{tag}</h4>
        ))}
    </div>
  )
}

export default Tags