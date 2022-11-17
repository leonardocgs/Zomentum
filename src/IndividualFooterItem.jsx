const IndividualFooterItem = ({ individualNavItem }) => {
  return (
    <div className="individual-footer-item">
      <h3>{individualNavItem.title}</h3>
      <ul>
        {individualNavItem.listItem.map((item, index) => (
          <li key={index + 1}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default IndividualFooterItem;
