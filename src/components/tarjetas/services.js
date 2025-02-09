import "./Services.css";

export default function Services({ title, services }) {
  return (
    <div className="services-container">
      <h2 className="services-title">{title}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            {service.link ? (
              <a href={service.link} className="service-title" target="_blank" rel="noopener noreferrer">
                {service.title}
              </a>
            ) : (
              <h3 className="service-title">{service.title}</h3>
            )}
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
