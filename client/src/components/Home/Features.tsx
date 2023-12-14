import { features } from "../../data/data";

function Features() {
  return (
    <ul className="home__features container">
      {features.map((feature, index) => (
        <li key={index} className="feature">
          <img src={feature.icon} alt={feature.name} />
          <span>{feature.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Features;
