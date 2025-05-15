import styled from 'styled-components';
import React, { useRef, useState } from 'react';

export const Maps = () => {

    const parrafoRef = useRef(null);
    const [copiado, setCopiado] = useState(false);

    const copiarAlPortapapeles = async () => {
        if (parrafoRef.current) {
        try {
            await navigator.clipboard.writeText(parrafoRef.current.textContent);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000); // Ocultar el mensaje después de 2 segundos
        } catch (err) {
            console.error('Error al copiar al portapapeles: ', err);
        }
        }
    };

  return (
    <Container>
        <div className='titulo'>
            <h2>Nuestra Ubicacion</h2>
            <a href="https://maps.app.goo.gl/aHuv5pq6nzN1mbCa6" target="_blank" rel="noopener noreferrer">ir</a>
            <p>No tenemos letreros grandes ni avisos debes agendar tu visita!</p>
            <br />
            <p ref={parrafoRef}>Calle 22 #40-35 sobre el servientrega de los andes, Barrio los andes, Armenia, Quindio.</p>
            <button onClick={copiarAlPortapapeles}>
                {copiado ? '¡Copiado!' : 'Copiar Dirección'}
            </button>
        </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.284139270195!2d-75.6901534!3d4.5427916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5a34e8d4787%3A0x29b3a5cb08882438!2sEnlaces%20DS%20-%20ELU%20LOZANO!5e0!3m2!1ses-419!2sco!4v1747308584404!5m2!1ses-419!2sco"
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" />
    
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 20px;
    justify-content: space-around;
    .titulo{
        border-top: 2px solid #007fff;
        padding-block: 20px;
        width: 40%;
        text-align: center;
        @media (max-width: 700px) {
            width: 100%;
            border-top: 0;
            border-right: 2px solid #007fff;
        }
    }
    .titulo h2{
        font-size: 2rem;
        margin-bottom: 10px;
    }
    .titulo a, .titulo button{
        text-decoration: none;
        border: none;
        color: #fff;
        background-color: #007fff;
        padding: 10px 20px;
        margin-top: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px #ffffff;
        font-weight: bold;
        font-size: 1.2rem;
        margin-left: 10px;
        transition: all 0.3s ease-in-out;
        &:hover{
            color: #f00;
            transform: scale(1.1);
        }
    }
    iframe{
        width: 60%;
        height: 50vh;
        border: 0;
        border: 2px solid #007fff;
        @media (max-width: 700px) {
            width: 100%;
        }
    }

    `;