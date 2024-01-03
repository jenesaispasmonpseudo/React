import classes from "./Footer/Footer.module.css";
import Navigation from "./Navigation";

const Footer = (props) => {
  return (
    <footer className={classes['footer']}>
      <h1>Footer</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </footer>
  );
};

export default Footer;
