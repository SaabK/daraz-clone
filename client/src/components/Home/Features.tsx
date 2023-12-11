import { features } from "../../data/data";

function Features() {
  return (
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index}>
          <img src={feature.icon} alt={feature.name} />
          <span>{feature.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Features;
