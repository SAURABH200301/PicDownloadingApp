import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.main}>
      <nav className={`navbar ${classes.nav}`}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{color:"white"}}>GetPic</a>
          <div className="">
            <button className={`btn ${classes.login}`} type="submit">
              Login
            </button>
            <button className={`btn ${classes.signup}`} type="submit">
              Create Account
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
