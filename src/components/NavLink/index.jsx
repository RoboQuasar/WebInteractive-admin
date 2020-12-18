import React from 'react';
import PropTypes from 'prop-types';

function NavLink(props) {
    return (
        <a className={props.className} href = {props.hrefLink}>
            {/* я так понимаю, этому компоненту нужно придать какой либо дефолтный стиль, а в LeftMenu уже менять его?*/}
            {props.children}
        </a>
    )
}

NavLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    hrefLink: PropTypes.node
  }

  export default NavLink;
