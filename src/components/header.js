import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./header.scss";

const Header = (props) => {
    return (
        <>
            <div id="title">
                <img src="ajay_profile.jpg" class="profilepic"/>
                {" "}
                {
                    props.url ? 
                    <Link to={props.url}
                        className="title-text">
                        Ajay Ramachandran
                    </Link>
                    :
                    <a href="https://ajay.app"
                        className="title-text">
                        Ajay Ramachandran
                    </a>
                }
            </div>

            <main>{props.children}</main>
        </>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
