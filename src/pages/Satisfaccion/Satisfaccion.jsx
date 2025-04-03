import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./satis.css";
import RadioInput from "./RadioInput";
import useModal from "../../components/modal/useModal";
import Modal from "../../components/modal/Modal";

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
    improve: "",
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
      setTimeout(() => {
        setSubmissionStatus("");
      }, 700);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxygCRscyHD4I2OdLFfzUmYhmZcYiqLQ-Kj0jznlxVezMw0p0BMFvVhS1cQXfg3Z16LxA/exec",
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
        }, 3000);
        setTimeout(() => {
          navigate("/");
        }, 3500);
      } else {
        //console.error(result);
        setSubmissionStatus("Hubo un error al enviar el formulario. solicita uno nuevo si deseas");
        openModalAlert();
      }
    } catch (error) {
      setSubmissionStatus("No se pudo enviar el formulario. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="survey-container">
      <h2>Hola <p className="cliente">{clientName}</p>queremos saber tu opinión.</h2>
      <h1>{service}</h1>
      <h2>Encuesta de satisfacción</h2>
      {submissionStatus && <p className="status-message">{submissionStatus}</p>}

      <form onSubmit={handleSubmit}>
        <RadioInput
          label="¿Qué tan satisfecho(a) estás con el servicio recibido?"
          params={["1 Muy Insatisfecho","2","3","4","5 Muy Satisfecho"]}
          name="deliveryTimeRating"
          value={formData.deliveryTimeRating}
          onChange={handleChange}
        />
        <RadioInput
          label="¿Cómo calificarías la atención recibida durante el servicio?"
          params={["1 Muy Mala","2","3","4","5 Muy Buena"]}
          name="priceRating"
          value={formData.priceRating}
          onChange={handleChange}
        />
        <RadioInput
          label="¿El servicio fue realizado dentro del tiempo esperado?"
          params={["No", "Sí"]}
          name="recommendation"
          value={formData.recommendation}
          onChange={handleChange}
        />
        <label>
          ¿Hay algo que podamos mejorar?
          <textarea
            className="comentario"
            name="improve"
            value={formData.improve}
            onChange={handleChange}
            placeholder="Opcional."
          />
        </label>
        <RadioInput
          label="¿Qué tan probable es que nos recomiendes a un amigo o familiar?"
          params={["1 Ninguna Probabilidad ","2","3","4","5 Muy Probable"]}
          name="deviceCondition"
          value={formData.deviceCondition}
          onChange={handleChange}
        />
        <label>
        Si deseas, cuéntanos qué fue lo que más te gustó del servicio.
          <textarea
            className="comentario"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Opcional. EJ: ¡una queja, un reclamo o algun punto a resaltar!"
          />
        </label>
        {submissionStatus && <p className="status-message">{submissionStatus}</p>}
        {submissionStatus === "" && <button type="submit">Enviar</button>}
      </form>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="¡De maravilla!"
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
