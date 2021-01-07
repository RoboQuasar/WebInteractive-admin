import React from 'react';
import PropTypes from 'prop-types';
import {
       NavLink
  } from "react-router-dom";

function NavigLink(props) {
    return (
        <NavLink className={props.className} to = {props.hrefLink} activeClassName={props.activeClassName}>{props.children}</NavLink>
        )
}

NavigLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    hrefLink: PropTypes.node,
    activeClassName: PropTypes.string,
  }

  export default NavigLink;
