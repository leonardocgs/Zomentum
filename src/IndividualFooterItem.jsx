const IndividualFooterItem = ({ individualNavItem }) => {
  return (
    <nav>
      <h3>{individualNavItem.title}</h3>
      <ul>
        {individualNavItem.listItem.map((item, index) => (
          <li key={index + 1}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};
export default IndividualFooterItem;
