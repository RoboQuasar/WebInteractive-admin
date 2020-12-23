import React from 'react';
import PropTypes from 'prop-types';
import {
   //BrowserRouter as Router,
       Link
  } from "react-router-dom";

function NavLink(props) {
    return (
        <Link className={props.className} to = {props.hrefLink}>{props.children}</Link>
        )
}

NavLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    hrefLink: PropTypes.node
  }

  export default NavLink;
