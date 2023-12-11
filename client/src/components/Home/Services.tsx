import { services } from "../../data/data";

function Services() {
  return (
    <ul className="services">
      {services.map((service, index) => (
        <li key={index}>
          <img src={service.icon} alt={service.name} />
          <span>{service.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Services;
