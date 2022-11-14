import { useState } from "react";
import HamburguerMenuIcon from "./HamburgerMenuIcon";
import Navigation from "./Navigation";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <header className="header">
      <div className="container">
        <img src="/zomentum_logo.png" alt="Logo da Zumentum" />
        <HamburguerMenuIcon handleToggle={handleToggle} isActive={isActive} />
      </div>
      <Navigation isActive={isActive} />
    </header>
  );
};
export default Header;
