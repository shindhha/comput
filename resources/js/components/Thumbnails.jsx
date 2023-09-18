import React from "react";
function Thumbnails({children,header}) {

    return (


        <div className="col-md-3 shadow-sm  bg-grey thumbnail rounded-3 element p-3">
            <img src="/img/urobase.svg" className="thumbnail-img card-img"/>

          <div className="">
            <div className="caption">

              <h3 className="text-white text-center">{header}</h3>
            </div>
            <div className="caption text-white fw-bold text-start">
              {children}
            </div>
          </div>
        </div>

    );
  }

export default Thumbnails

