import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./header.scss";

const Header = ({ children }) => {
    return (
        <>
            <div id="title">
                <img src="ajay_profile.jpg" class="profilepic"/>
                {" "}
                <a href="https://ajay.app"
                    className="title-text">
                    Ajay Ramachandran
                </a>
            </div>

            <main>{children}</main>
        </>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
