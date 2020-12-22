import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

function NavLink(props) {
    return (
        //<Router>
        <div>
        {/* <a className={props.className} href = {props.hrefLink}>
            {/* я так понимаю, этому компоненту нужно придать какой либо дефолтный стиль, а в LeftMenu уже менять его?}
            {props.children}
        </a> */}

        <Link to = {props.Link}>{props.children}</Link>
        <Route exact path={props.Link} component = {props.LinkedComponent} />
        </div>
        //</Router>
    )
}

NavLink.propTypes = {
    children: PropTypes.node,
    //className: PropTypes.node,
    //hrefLink: PropTypes.node
    Link: PropTypes.node,
    LinkedComponent:PropTypes.node
  }

  export default NavLink;
