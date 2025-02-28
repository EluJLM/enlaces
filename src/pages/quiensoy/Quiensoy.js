import React from 'react';
import styled from 'styled-components';
import { FaTiktok, FaFacebook } from 'react-icons/fa'; // Importamos los íconos de TikTok y Facebook

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
    border: 5px solid #007fff;
    @media (max-width: 700px) {
        width: 130px; 
        height: 130px;
        bottom: -65px;
    }
`;

const InfoContainer = styled.div`
  margin: 60px; // Espacio para la foto
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
    margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007fff;
  }
`;

export const Quiensoy = () => {
  return (
    <Container>
        <ContenImg>
            <Photo src="foto.jpg" alt="Elu Jesus Lozano Mendoza" />
        </ContenImg>
      <InfoContainer>
        <Name>Elu Jesus Lozano Mendoza</Name>
        <Description>
          Hola soy Elu, un apasionado por la electrónica, la programación.
        </Description>
        <Description>
            Me gusta aprender cosas nuevas y compartir mis conocimientos.
        </Description>
        <Description>
            Soy estudiante de instrumentación electrónica en la universidad del Quindío, este año me graduo.
        </Description>
        <Description>
            En el momento ofrezco servicios de cerrajería, técnico electrónico, y servicios webs.
        </Description>
        <Description>
            Mi meta es generar empleo y ayudar a las personas a solucionar sus problemas.
        </Description>
        <SocialLinks>
          <SocialLink href="https://www.tiktok.com/@elujlm" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={34}/>
          </SocialLink>
          <SocialLink href="https://www.facebook.com/enlacesdev" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={34}/>
          </SocialLink>
        </SocialLinks>
      </InfoContainer>
    </Container>
  );
};