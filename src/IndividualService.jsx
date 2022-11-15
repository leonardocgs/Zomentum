const IndividualService = (props) => {
  return (
    <section className="individual-service">
      <img src={props.image.src} alt={props.image.alt} />
      <div className="container">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <div className="signup-link">
          <a href="#">Signup now</a>
          <img src="/arrow.svg" alt="A arrow icon" />
        </div>
      </div>
      )
    </section>
  );
};
export default IndividualService;
