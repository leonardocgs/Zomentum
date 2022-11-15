import IndividualService from "./IndividualService";
import { useId } from "react";

const Services = () => {
  const servicesInfo = [
    {
      title: "Your channel program on steroids",
      paragraph:
        "Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.",
      image: {
        src: "/information-1.svg",
        alt: "A draw of a man using a spyglass",
      },
    },
    {
      title: "Become the vendor everyone wants to buy from",
      paragraph:
        "Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!",
      image: {
        src: "/information-2.svg",
        alt: "Draw of two men having a meeting",
      },
    },
    {
      title: "It’s like having Your best Salesman on autopilot",
      paragraph:
        "Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.",
      image: {
        src: "/information-3.svg",
        alt: "Draw of a man point to a rocket",
      },
    },
    {
      title: "Track your channel performance",
      paragraph:
        "Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.",
      image: {
        src: "/information-4.svg",
        alt: "A draw of a bunch of charts",
      },
    },
  ];

  return (
    <section className="services-section">
      {servicesInfo.map((info, index) => (
        <IndividualService serviceInformation={info} key={index} />
      ))}
    </section>
  );
};
export default Services;
