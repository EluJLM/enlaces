import { FaMobileAlt, FaPlug, FaTv, FaBlender, FaTools, FaCogs, FaLaptop } from "react-icons/fa";

export const technicalServices = [
  // 📌 ELECTRODOMÉSTICOS
  {
    icon: <FaBlender size={40} className="icon" />,
    title: "Reparación de Freidoras de Aire y Ollas Arroceras",
    description:
      "Servicio técnico para freidoras de aire y ollas arroceras de cualquier marca. Arreglamos fallas eléctricas, mecánicas y de funcionamiento.",
  },
  {
    icon: <FaPlug size={40} className="icon" />,
    title: "Reparación de Microondas",
    description:
      "Si su microondas no calienta, tiene fallas en los botones o hace ruidos extraños, lo reparamos con repuestos de calidad.",
  },
  {
    icon: <FaTv size={40} className="icon" />,
    title: "Reparación de Televisores y Equipos de Sonido",
    description:
      "Solucionamos problemas de imagen, sonido y encendido en televisores y equipos de audio, sin importar la marca o modelo.",
  },

  // 📌 CELULARES Y COMPUTADORES
  {
    icon: <FaMobileAlt size={40} className="icon" />,
    title: "Reparación de Celulares Android",
    description:
      "Cambio de pantalla, reemplazo de pin de carga, ajustes de software y optimización para un mejor rendimiento. ¡Su celular como nuevo!",
  },
  {
    icon: <FaLaptop size={40} className="icon" />,
    title: "Reparación y Optimización de Computadores",
    description:
      "Formateo, instalación de programas, limpieza de virus y mantenimiento de computadores lentos o con fallas técnicas.",
  },

  // 📌 MANTENIMIENTO Y ASESORÍA
  {
    icon: <FaTools size={40} className="icon" />,
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Evite daños mayores con mantenimiento técnico especializado para electrodomésticos, celulares y computadores.",
  },
  {
    icon: <FaCogs size={40} className="icon" />,
    title: "Asesoría y Diagnóstico Técnico",
    description:
      "¿No sabe qué le pasa a su equipo? Hacemos diagnóstico y le damos la mejor solución sin rodeos ni costos ocultos.",
  },
];
