import React from "react";
function NavBarLink(props) {
    return (
      <div className="text-white">
        <img src={props.img}/>
        <a>{props.text}</a>
      </div>
    );
  }

export default NavBarLink