import HamburguerMenuIcon from "./HamburgerMenuIcon";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img src="/zomentum_logo.png" alt="Logo da Zumentum" />
      <HamburguerMenuIcon />
      <Navigation />
    </header>
  );
};
export default Header;
