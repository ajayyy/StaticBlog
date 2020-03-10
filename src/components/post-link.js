import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div style={{textAlign: "center", padding: "5px"}}>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>

    <div style={{fontSize: 15, margin: 0}}>
        Posted {post.frontmatter.date}
    </div>

    <Link to={post.frontmatter.path}>
        {post.frontmatter.image ? (
          <img src={post.frontmatter.image}
              style={{maxHeight: 150}}></img>
        ): ""}
    </Link>
  </div>
);

export default PostLink;