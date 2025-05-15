import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { serviciotecnicosmartphone, solucioneswebs, cerrajeria } from "../routes/Routes_text";
import NavElement from "../components/boton/NavElement";
import { Maps } from "../components/maps/Maps";


const Home = () => {
  const navigate = useNavigate();

  return (
    <SectionOne>
      <StyledHeader>
        <AnimatedH3>Bienvenidos a</AnimatedH3>
        <MainHeading>Enlaces</MainHeading>
        <AnimatedH3>
          <HighlightText>D</HighlightText>esarrollo y <HighlightText>S</HighlightText>oluciones
        </AnimatedH3>
      </StyledHeader>

      <StyledNavigationButtons>
        <AnimatedNavElement 
          variant="web" 
          elementType="button" 
          onClick={() => navigate(solucioneswebs)}
        >
          Soluciones Webs
        </AnimatedNavElement>
        <AnimatedNavElement
          variant="tech"
          elementType="button"
          onClick={() => navigate(serviciotecnicosmartphone)}
        >
          Servicio Técnico
        </AnimatedNavElement>
        <AnimatedNavElement
          variant="locksmith"
          elementType="button"
          onClick={() => navigate(cerrajeria)}
        >
          Cerrajería
        </AnimatedNavElement>
      </StyledNavigationButtons>
      
      <Maps />


    </SectionOne>
  );
};

export default Home;  

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionOne = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  min-height: 100vh;
  box-shadow: 0 0 6px #00000050;
  padding-bottom: 50px;
  overflow: hidden;
  animation: ${fadeUp} 0.3s ease forwards;
  
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 90vh;
    justify-content: center;
    margin-top: 25px;
    h2 {
      text-align: center;
    }
  }
`;

const StyledHeader = styled.header`
  padding: 10px 40px;
  color: ${({ theme }) => theme.black || '#000'};
  animation: ${fadeUp} 0.3s ease forwards;
  opacity: 0;
  animation-delay: 0.3s;
  width: 40%;
  min-height: 100vh;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 50vh;
    padding-top: 150px;    
    h2, h1, p {
      text-align: center;
    }
  }
`;

const MainHeading = styled.h1`
  font-size: 44px;
  color: ${({ theme }) => theme.bluelight || '#007fff'};
  animation: ${fadeUp} 0.3s ease forwards;
  opacity: 0;
  animation-delay: 0.3s;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.azure || '#007fff'};
  font-weight: 900;
  font-size: 24px;
`;

const AnimatedH3 = styled.p`
  animation: ${fadeUp} 1s ease forwards;
  opacity: 0;
  font-weight: 400;
  animation-delay: 0.3s;
`;

const StyledNavigationButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  width: 50%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    padding-top: 50px;
    margin-bottom: 150px;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;
const AnimatedNavElement = styled(NavElement)`
  animation: ${fadeUp} 1.5s ease forwards;
  opacity: 0;
  animation-delay: ${props => {
    if (props.variant === 'web') return '0.9s';
    if (props.variant === 'tech') return '1.1s';
    if (props.variant === 'locksmith') return '1.3s';
    return '0s';
  }};
`;