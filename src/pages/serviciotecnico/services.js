import { FaMobileAlt, FaPlug, FaTv, FaBlender, FaTools, FaCogs, FaLaptop, FaPrint} from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
export const technicalServices = [
  // 📌 ELECTRODOMÉSTICOS
  {
    icon: FaBlender,
    title: "Reparación de Freidoras de Aire y Ollas Arroceras",
    description:
      "Servicio técnico para freidoras de aire y ollas arroceras de cualquier marca. Arreglamos fallas eléctricas, mecánicas y de funcionamiento.",
  },
  {
    icon: FaPlug,
    title: "Reparación de Microondas",
    description:
      "Si su microondas no calienta, tiene fallas en los botones o hace ruidos extraños, lo reparamos con repuestos de calidad.",
  },
  {
    icon: FaTv,
    title: "Reparación de Televisores y Equipos de Sonido",
    description:
      "Solucionamos problemas de imagen, sonido y encendido en televisores y equipos de audio, sin importar la marca o modelo.",
  },

  // 📌 CELULARES Y COMPUTADORES
  {
    icon: FaMobileAlt,
    title: "Reparación de Celulares Android",
    description:
      "Cambio de pantalla, reemplazo de pin de carga, ajustes de software y optimización para un mejor rendimiento. ¡Su celular como nuevo!",
  },
  {
    icon: FaLaptop,
    title: "Reparación y Mantenimiento de Computadores",
    description:
      "Formateo, instalación de programas, limpieza de virus y mantenimiento de computadores lentos o con fallas técnicas.",
  },
  {
    icon: FaPrint,
    title: "Reparación y Mantenimiento de Impresoras",
    description:
      "Reparación de impresoras de inyección de tinta y láser. Solucionamos problemas de impresión, atascos y mantenimiento preventivo.",
  },

  // 📌 MANTENIMIENTO Y ASESORÍA
  {
    icon: FaTools,
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Evite daños mayores con mantenimiento técnico especializado para electrodomésticos, celulares y computadores.",
  },
  {
    icon: FaCogs,
    title: "Asesoría y Diagnóstico Técnico",
    description:
      "¿No sabe qué le pasa a su equipo? Hacemos diagnóstico y le damos la mejor solución sin rodeos ni costos ocultos.",
  },
  {
      icon: FcElectronics,
      title: "Fabricación de PCB",
      description: "Dale clik al titulo de esta tarjeta y cotiza tu PCB. Fabricación para estudiantes y de caracter educativo.", 
      link: "/serviciotecnico/pcb",
    },
];
