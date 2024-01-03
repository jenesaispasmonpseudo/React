import classes from "./Header/Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className={classes['header']}>
      <h1>Header</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default Header;
