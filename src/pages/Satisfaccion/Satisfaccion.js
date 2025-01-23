import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./satis.css";
import RadioInput from "./RadioInput";
import useModal from "./../../components/modal/useModal";
import Modal from "./../../components/modal/Modal";

const Satisfaccion = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);

  const service = urlParams.get("nameservice")?.replaceAll("_", " ") || "Servicio";
  const clientName = urlParams.get("nameuser")?.replaceAll("_", " ") || "Cliente";
  const token = urlParams.get("token") || ""; // Leer el token de la URL

  const [formData, setFormData] = useState({
    service,
    clientName,
    token, // Añadir el token a los datos del formulario
    priceRating: "",
    deliveryTimeRating: "",
    recommendation: "",
    deviceCondition: "",
    comments: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isOpen, openModal, closeModal] = useModal();
  const [isOpenAlert, openModalAlert, closeModalAlert] = useModal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("Enviando...");

    if (!formData.priceRating || !formData.deliveryTimeRating || !formData.recommendation || !formData.deviceCondition) {
      setSubmissionStatus("Por favor, completa todos los campos requeridos.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyu3ZjO6OuBzwZb8BwaYpzSpyt4wX4lk56tNd-_WAj4r5oEhs-YuTnMxxLo2iCYbnK_zw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      const result = await response.text();

      if (result.includes("¡Tu mensaje fue enviado exitosamente a la base de datos de Google Sheets!")) {
        setSubmissionStatus("¡Gracias por tu retroalimentación!");
        openModal();
        setTimeout(() => {
          closeModal();
          navigate("/");
        }, 3000);
      } else {
        setSubmissionStatus("Hubo un error al enviar el formulario.");
        openModalAlert();
      }
    } catch (error) {
      setSubmissionStatus("No se pudo enviar el formulario. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="survey-container">
      <h1>{service}</h1>
      <h2>Encuesta de satisfacción</h2>
      <h2>Hola <p className="cliente">{clientName}</p>queremos saber tu opinión.</h2>

      {submissionStatus && <p className="status-message">{submissionStatus}</p>}

      <form onSubmit={handleSubmit}>
        <RadioInput
          label="¿Qué te pareció el tiempo de entrega?"
          params={["Demorado", "A tiempo", "Rápido"]}
          name="deliveryTimeRating"
          value={formData.deliveryTimeRating}
          onChange={handleChange}
        />
        <RadioInput
          label="¿Qué te pareció el precio?"
          params={["Costoso", "Justo", "Económico"]}
          name="priceRating"
          value={formData.priceRating}
          onChange={handleChange}
        />
        <RadioInput
          label="¿Nos recomendarías a alguien más?"
          params={["No", "Tal vez", "Sí"]}
          name="recommendation"
          value={formData.recommendation}
          onChange={handleChange}
        />
        <RadioInput
          label="¿Cómo quedó tu dispositivo?"
          params={["Mal", "Aceptable", "Bueno"]}
          name="deviceCondition"
          value={formData.deviceCondition}
          onChange={handleChange}
        />
        <label>
          Comentarios adicionales
          <textarea
            className="comentario"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Opcional. EJ: ¡una queja, un reclamo o algun punto a resaltar!"
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="¡De Maravilla!"
        text="Tus datos se han registrado con éxito."
        css={"ok"}
      />
      <Modal
        isOpen={isOpenAlert}
        onClose={closeModalAlert}
        title="¡Tenemos un Error!"
        text="Tu formulario ya se uso solicita uno nuevo si deseas"
        css={"alert"}
      />
    </div>
  );
};

export default Satisfaccion;
