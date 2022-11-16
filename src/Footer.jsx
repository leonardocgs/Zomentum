import IndividualFooterItem from "./IndividualFooterItem";

const Footer = () => {
  const navList = [
    {
      title: "Product",
      listItem: ["Features", "Pricing", "Integrations", "Product"],
    },
    {
      title: "Company",
      listItem: [
        "About us",
        "Contact us",
        "Submit a ticket",
        "Privacy policy",
        "Terms & conditions",
      ],
    },
    {
      title: "Guides",
      listItem: ["MSP", "MSP sales"],
    },
    {
      title: "Contact Us",
      listItem: ["Address"],
    },
  ];
  return (
    <footer className=".footer">
      {navList.map((individualNavItem, index) => (
        <IndividualFooterItem
          individualNavItem={individualNavItem}
          key={index}
        />
      ))}
      <p>© 2020 Pactora Inc. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
