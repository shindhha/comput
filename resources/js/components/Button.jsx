import React from "react";
function Button(props) {
    return (
      <div className = "btn btn-primary">
        {props.text}
      </div>
    );
}

  export default Button