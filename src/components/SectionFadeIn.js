function SectionFadeIn({children,title,css_element}) {
    const jcss_element = `gap-3 ${css_element} container-fluid p-5`;
    return (
      <div className={jcss_element}>
          <div className="p-3 ">
            <h1 className="text-white fade-in-element from-top">{title}</h1>
          </div>
          <div className= "gap-4 row justify-content-center fade-in-element from-bottom">
            {children}
          </div>
          
        </div>
    );
  }

export default SectionFadeIn