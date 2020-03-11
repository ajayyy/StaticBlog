import React from "react";
import { graphql, StaticQuery } from "gatsby";

import PostLink from "../components/post-link";

const PostList = ({
    data: {
        allMarkdownRemark: { edges },
    },
    filter
}) => {
    const posts = edges
        .filter(filter || (() => true)) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return posts;
}

export default (props) => (
    <StaticQuery
      query={graphql`
      query {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            path
                            title
                            image
                            tags
                        }
                    }
                }
            }
        }
      `}
      render={data => (
        <PostList data={data} {...props}/>
      )}
    />
);