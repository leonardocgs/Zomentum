import { useState } from "react";
const HamburguerMenuIcon = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const parentClassName = "hamburguer-menu-icon";
  return (
    <button
      onClick={handleToggle}
      className={isActive ? parentClassName + " clicked" : parentClassName}
    >
      <div className="hamburguer-menu-bar"></div>
      <div className="hamburguer-menu-bar"></div>
      <div className="hamburguer-menu-bar"></div>
    </button>
  );
};
export default HamburguerMenuIcon;
