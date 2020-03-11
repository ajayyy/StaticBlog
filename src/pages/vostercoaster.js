import React from "react";
import { graphql } from "gatsby";

import PostLink from "../components/post-link";
import Header from "../components/header";
import PostList from "../components/post-list";

const IndexPage = () => (
    <Header>
        <h1 style={{textAlign: "center", margin: "0px"}}>
            Voster Coaster News
        </h1>

        <PostList filter={(edge) => JSON.parse(edge.node.frontmatter.tags).includes("vostercoaster")}/>
    </Header>
);

export default IndexPage