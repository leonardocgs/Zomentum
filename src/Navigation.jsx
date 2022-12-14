const Navigation = (props) => {
  return (
    <nav className={props.isActive ? "clicked" : null}>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Get a Demo</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
