import React from "react";

import Header from "../components/header";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <Header>
        <SEO title="404: Not found" />
        <div className="container">
            <h1>Not Found</h1>
        </div>
    </Header>
);

export default NotFoundPage;
