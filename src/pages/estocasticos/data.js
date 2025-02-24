export const surveyData = {
  title: "Encuesta sobre el Uso de Microcontroladores",
  description: "Queremos conocer tu experiencia y percepción sobre el uso de microcontroladores en instrumentación electrónica.",
  qualitative: {
    nominal: [
      {
        name: "microcontroladoresUsados",
        question: "¿Cuál de los siguientes microcontroladores has utilizado en tus proyectos?",
        options: ["Arduino", "ESP8266", "ESP32", "Otros", "No he usado microcontroladores"],
      },
      {
        name: "contextoUso",
        question: "¿En qué contexto has utilizado los microcontroladores?",
        options: ["Académico", "Personal / Hobby", "Profesional / Trabajo", "No he usado microcontroladores"],
      },
    ],
    ordinal: [
      {
        name: "nivelExperiencia",
        question: "¿Cómo calificarías tu nivel de experiencia con microcontroladores?",
        options: ["Principiante", "Intermedio", "Avanzado"],
      },
      {
        name: "utilidadPercibida",
        question: "¿Cuán útil consideras el uso de microcontroladores en tu formación en instrumentación electrónica?",
        options: ["Nada útil", "Poco útil", "Algo útil", "Muy útil", "Esencial"],
      },
    ],
  },
  quantitative: {
    discrete: [
      {
        name: "proyectosRealizados",
        question: "¿Cuántos proyectos con microcontroladores has realizado?",
        options: ["0", "1", "2", "3 o más"],
      },
      {
        name: "lenguajesUsados",
        question: "¿Cuántos lenguajes de programación has utilizado para programar microcontroladores?",
        options: ["1", "2", "3 o más"],
      },
      {
        name: "horasSemanales",
        question: "¿Cuántas horas a la semana dedicas a aprender o trabajar con microcontroladores?",
        options: ["0", "1", "2", "3 o más"],
      },
    ],
    continuous: [
      { name: "voltajePromedio", question: "¿Cuál es el voltaje promedio que usas en tus proyectos con microcontroladores?", unit: "V" },
      { name: "mesesUso", question: "¿Cuánto tiempo (en meses) llevas usando microcontroladores?", unit: "meses" },
      { name: "costoComponentes", question: "¿Cuál es el costo promedio de los componentes que compras para tus proyectos con microcontroladores?", unit: "COP" },
      { name: "porcentajeProyectos", question: "¿Qué porcentaje de tus proyectos de instrumentación incluyen el uso de microcontroladores?", unit: "%" },
    ],
  },
};
