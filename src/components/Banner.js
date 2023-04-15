import "../styles/banner.css";
function Banner() {
  return (
    <section role="banner" className="banner">
      <article className="banner-content">
        <h2>
          Discover the <span>Best</span> Food and Drinks
        </h2>
        <p>
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button>Explore Now!</button>
      </article>
      <div className="banner-img-container">
        <img className="main-img" src="/assets/pizza.png" alt="pizza"></img>

        <img
          className="overlay-img"
          src="/assets/overlay.png"
          alt="pizza"
        ></img>
      </div>
    </section>
  );
}

export default Banner;
