const HamburguerMenuIcon = (props) => {
  const parentClassName = "hamburguer-menu-icon";
  return (
    <button
      className={
        props.isActive ? parentClassName + " clicked" : parentClassName
      }
      onClick={props.handleToggle}
    >
      <div className="hamburguer-menu-bar"></div>
      <div className="hamburguer-menu-bar"></div>
      <div className="hamburguer-menu-bar"></div>
    </button>
  );
};
export default HamburguerMenuIcon;
