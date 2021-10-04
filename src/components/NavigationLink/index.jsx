import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink
} from "react-router-dom";

function NavigationLink(props) {

  return (
    <NavLink className={props.className}
      to={props.hrefLink}
      activeClassName={props.activeClassName}
      >

      {props.children}
    </NavLink>
  )
}

NavigationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  hrefLink: PropTypes.node,
  activeClassName: PropTypes.string,
}

export default NavigationLink;
