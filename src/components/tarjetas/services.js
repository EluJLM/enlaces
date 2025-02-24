import { useState, useEffect } from "react";
import "./Services.css";

export default function Services({ title, services }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = (index) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-title">{title}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card" 
            onClick={() => toggleDescription(index)}
          >
            {service.icon}
            {service.link ? (
              <a href={service.link} className="service-title" target="_blank" rel="noopener noreferrer">
                {service.title}
              </a>
            ) : (
              <h3 className="service-title">{service.title}</h3>
            )}
            <p className={`service-description ${isMobile && openIndex === index ? "open-service-description" : ""}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
