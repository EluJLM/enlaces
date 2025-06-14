import { useState } from 'react';

function PhoneForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

const apiUrl = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Enviando número:', phone);
    try {
      const res = await fetch(apiUrl, {
         method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, phone: phone }),
            });

      const data = await res.json();
      if (data.success) {
        setMessage('Mensaje enviado con éxito. Te llamaremos pronto 📞');
        setPhone('');
      } else {
        setMessage('Hubo un error. Intenta nuevamente.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error de conexión.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '50px auto', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
      <h2>¡Te Llámanos!</h2>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulario de Contacto</h2>
      
      <label>
        Nombre
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jorge Lozano"
          name="name"
          required
        />
      </label>
      <label>
        Numero de Teléfono
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ej: 3001234567"
          name="phone"
          required
        />
      </label>
      <button type="submit">¡Llámenme!</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default PhoneForm;
