const IndividualService = ({ serviceInformation }) => {
  return (
    <section className="individual-service">
      <img
        src={serviceInformation.image.src}
        alt={serviceInformation.image.alt}
      />
      <div className="container">
        <h2>{serviceInformation.title}</h2>
        <p>{serviceInformation.paragraph}</p>
        <div className="signup-link">
          <a href="#">Signup now</a>
          <img src="/arrow.svg" alt="A arrow icon" />
        </div>
      </div>
    </section>
  );
};
export default IndividualService;
