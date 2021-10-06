import React, {useContext} from "react";
import UserLoginInfoContext from "react_context/UserLoginInfoContext";
import PropTypes from 'prop-types';

function ExitButton(props){
  const [isLogged, setIsLogged] = useContext(UserLoginInfoContext);

  function exitClick(){
      if(isLogged == true){
        setIsLogged(false);
      }
  }
  return(
    <button className={props.className} onClick = {exitClick}>{props.children}</button>
  )
}

ExitButton.propTypes={
  className: PropTypes.node,
  onClick: PropTypes.node,
  children: PropTypes.node,
}

export default ExitButton;
