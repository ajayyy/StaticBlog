import React from "react";
import { graphql } from "gatsby";

import PostLink from "../components/post-link";
import Header from "../components/header";
import PostList from "../components/post-list";

const IndexPage = () => (
    <Header>
        <h1 style={{textAlign: "center", margin: "0px"}}>
            SponsorBlock News
        </h1>

        <div style={{textAlign: "center", lineHeight: "1"}}>
            <a href="/rss.xml" title="RSS feed">
                <img src="/rss.webp" height="15px"/>
            </a>
        </div>

        <PostList filter={(edge) => JSON.parse(edge.node.frontmatter.tags).includes("sponsorblock")}/>
    </Header>
);

export default IndexPage