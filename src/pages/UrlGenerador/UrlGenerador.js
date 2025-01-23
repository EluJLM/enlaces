import React, { useState, useEffect } from "react";
import "./url.css"
const UrlGenerator = () => {
  const [service, setService] = useState("");
  const [clientName, setClientName] = useState("");
  const [token, setToken] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  // Actualiza la URL de forma reactiva cuando cambien los valores
  useEffect(() => {
    const formattedService = service.replaceAll(" ", "_");
    const formattedClientName = clientName.replaceAll(" ", "_");
    const url = `https://enlade.web.app/satisfactionsurvey?nameservice=${formattedService}&nameuser=${formattedClientName}&token=${token}`;
    setGeneratedUrl(url);
  }, [service, clientName, token]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl); // Copiar al portapapeles
    alert("¡URL copiada al portapapeles!");
  };

  return (
    <div className="urlgenerador">
      <h2>Generador de URLs para encuenta</h2>
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
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleCopyToClipboard}>Copiar URL al portapapeles</button>
      </div>
      {generatedUrl && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>URL Generada:</strong></p>
          <p>{generatedUrl}</p>
        </div>
      )}
    </div>
  );
};

export default UrlGenerator;
