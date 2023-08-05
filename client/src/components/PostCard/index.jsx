import React from 'react'

function PostCard({_id,title,body}) {
  return (
    <div className="post-card">
      <div className="post-title">
        {title}
      </div>
      <div className="post-body">
        {body}
      </div>
    </div>
  )
}

export default PostCard