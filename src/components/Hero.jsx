import heroBanner from "../assets/illustration-working.svg";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>More than just</h1>
        <h1>shorter links</h1>
        <p>
          Build your brand&#39;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <button className="btn-main">Get Started</button>
      </div>

      <img className="hero-banner" src={heroBanner} />
    </div>
  );
}
