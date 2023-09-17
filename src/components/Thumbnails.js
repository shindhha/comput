function Thumbnails({children,header}) {

    return (
  
      
        <div className="col-md-3 shadow-sm  bg-grey thumbnail rounded-3 element p-3">
          <div className="">
          <img src="/rsc/urobase.svg" className="thumbnail-img"/>
            <div className="caption">
            
              <h3 className="text-white">{header}</h3>
            </div>
            <div className="caption text-white fw-bold text-start">
              {children}
            </div>
          </div>
        </div>
      
    );
  }

export default Thumbnails

