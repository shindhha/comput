import NavBarLink from "./NavBarLink";
import Button from "./Button";
function NavBar(props) {
    return (
      <div className="container-fluid d-flex justify-content-between align-items-center  px-5">
        <div className="d-flex justify-content-start gap-3 align-items-center py-2">
        <img src="/rsc/urobase.svg" className="navbar-icon"/>
          <NavBarLink src="" text="Home"/>
          <NavBarLink src="" text="Store"/>
          <NavBarLink src="" text="Wipes"/>
          <NavBarLink src="" text="LeaderBoard"/>
          <NavBarLink src="" text="Verify"/>
          <NavBarLink src="" text="Status"/>
          <NavBarLink src="" text="Discord"/>
          <NavBarLink src="" text="Twitter"/>
          <NavBarLink src="" text="Facebook"/>
          <NavBarLink src="" text="Steam"/>
  
        </div>
        <div className ="text-white">
          <Button text="Bonjour"/>
        </div>
      </div>
    );
  }

  export default NavBar