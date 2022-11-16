const IndividualFootItem = (props) => {
  return (
    <nav>
      <h3>{props.title}</h3>
      <ul>
        {props.listItem.map((item, index) => (
          <li key={index + 1}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};
export default IndividualFootItem;
