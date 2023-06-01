import Card from "./Card";
import iconBrandRecognition from "../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/icon-fully-customizable.svg";

export default function Features() {
  return (
    <section className="features">
      <div className="statistics-container">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards-container">
        <Card
          icon={iconBrandRecognition}
          heading="Brand Recognition"
          body="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon={iconDetailedRecords}
          heading="Detailed Records"
          body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          icon={iconFullyCustomizable}
          heading="Fully Customizable"
          body="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}
