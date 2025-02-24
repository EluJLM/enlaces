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
  position: relative;
`;

const Photo = styled.img`
  width: 100px; // Tamaño de la foto
  height: 100px;
  border-radius: 50%; // Hace la foto redonda
  position: absolute;
  bottom: -50px; // Coloca la foto en la parte inferior del div
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

// Componente Quiensoy
export const Quiensoy = () => {
  return (
    <Container>
        
      <Photo src="ruta/a/tu/foto.jpg" alt="Elu Jesus Lozano Mendoza" />
      <InfoContainer>
        <Name>Elu Jesus Lozano Mendoza</Name>
        <Description>
          Tengo 24 años, soy estudiante de Instrumentación Electrónica en la Universidad del Quindío y pronto seré estudiante de Ingeniería Electrónica. Me desempeño como técnico electrónico y cerrajero en estos momentos y ofrezco algunos servicios webs. Llevo 8 años viviendo en Armenia y estoy muy agradecido con Dios y el Quindío por ser tan cheveres. Tengo una bebé muy hermosa.
        </Description>
      </InfoContainer>
    </Container>
  );
};