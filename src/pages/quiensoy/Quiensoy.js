import React from 'react';
import styled from 'styled-components';

// Estilos con styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; // 40% del alto de la pantalla
  background-color: #f0f0f0; // Color de fondo del contenedor

`;

const Photo = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    bottom: -75px;
    position: absolute;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    @media (max-width: 700px) {
        width: 130px; 
        height: 130px;
        bottom: -65px;
    }
    `;


const InfoContainer = styled.div`
  margin-top: 60px; // Espacio para la foto
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;
const ContenImg = styled.div`
    width: 100%;
    height:  90vh;
    display: flex;
    justify-content: center;
    background-image: url("willis.webp");
    background-size: cover;
    background-position: center;
    position: relative;
`;
export const Quiensoy = () => {
  return (
    <Container>
        <ContenImg>
            <Photo src="willis.webp" alt="Elu Jesus Lozano Mendoza" />
        </ContenImg>
      <InfoContainer>
        <Name>Elu Jesus Lozano Mendoza</Name>
        <Description>
          Tengo 24 años, soy estudiante de Instrumentación Electrónica en la Universidad del Quindío y pronto seré estudiante de Ingeniería Electrónica. Me desempeño como técnico electrónico y cerrajero en estos momentos y ofrezco algunos servicios webs. Llevo 8 años viviendo en Armenia y estoy muy agradecido con Dios y el Quindío por ser tan cheveres. Tengo una bebé muy hermosa.
        </Description>
      </InfoContainer>
    </Container>
  );
};