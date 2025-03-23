import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link
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
              <Link 
                to={service.link} 
                className="service-title"
                onClick={(e) => e.stopPropagation()} // Evita la propagación del click
              >
                {service.title}
              </Link>
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