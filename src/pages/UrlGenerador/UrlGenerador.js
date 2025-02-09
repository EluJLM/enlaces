import React, { useState, useEffect } from "react";
import "./url.css"
import useModal from "../../components/modal/useModal";
import Modal from "../../components/modal/Modal";
const UrlGenerator = () => {
  const [service, setService] = useState("");
  const [clientName, setClientName] = useState("");
  const [token, setToken] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const [isOpen, openModal, closeModal] = useModal();
  const [isOpen2, openModal2, closeModal2] = useModal();
  // Actualiza la URL de forma reactiva cuando cambien los valores
  useEffect(() => {
    const formattedService = service.replaceAll(" ", "_");
    const formattedClientName = clientName.replaceAll(" ", "_");
    const url = `https://enlade.web.app/satisfactionsurvey?nameservice=${formattedService}&nameuser=${formattedClientName}&token=${token}`;
    setGeneratedUrl(url);
  }, [service, clientName, token]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl); // Copiar al portapapeles
    openModal();
    setTimeout(() => {
      closeModal();
    }, 3000);
  };
  const handleCopyToken = () => {
    navigator.clipboard.writeText(token); // Copiar al portapapeles
    openModal2();
    setTimeout(() => {
      closeModal2();
    }, 5000);
  };

  return (
    <div className="urlgenerador">
      <h2>Generador de URLs para encuesta</h2>
      <h4>Recuerde añadir el token al backend</h4>
      <div>
        <label>
          Nombre del servicio:
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder="Ej: Reparación de Huawei Y9 Prime"
          />
        </label>
      </div>
      <div>
        <label>
          Nombre del cliente:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Ej: John Doe"
          />
        </label>
      </div>
      <div>
        <label>
          Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Ej: 123jdk"
          />
        </label>
        <button onClick={handleCopyToken}>Copiar Token</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleCopyToClipboard}>Copiar URL al portapapeles</button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="¡Copiado con exito!"
        text="Debes enviárselo a tu cliente."
        css={"ok"}
      />
      <Modal
        isOpen={isOpen2}
        onClose={closeModal2}
        title="¡Toke Copiado con exito!"
        text="Debes Agregarlo al Excel en la culumna de Token."
        css={"ok"}
      />
      {/*generatedUrl && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>URL Generada:</strong></p>
          <p>{generatedUrl}</p>
        </div>
      )*/}
    </div>
  );
};

export default UrlGenerator;
