import React from "react";
import { graphql } from "gatsby";

import PostLink from "../components/post-link";
import Header from "../components/header";

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(edge => true) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <Header>
            <div>{Posts}</div>
        </Header>
    );
}

export default IndexPage

export const pageQuery = graphql`
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
                    }
                }
            }
        }
    }
`