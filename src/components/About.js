import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <div className="about-img">
        <img src="/assets/aboutimg.png" alt="about" />
      </div>
      <article className="about-content">
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="primary-button">Read More</button>
      </article>
    </section>
  );
}

export default About;
