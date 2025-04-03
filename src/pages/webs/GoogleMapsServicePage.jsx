import styled from 'styled-components';
import { clients } from './services';
import { FaMapMarkerAlt, FaMobileAlt, FaStar } from 'react-icons/fa';
import { HeroSection, Section, SectionTitle} from '../../components/styled/styled';

const GoogleMapsServicePage = () => {
  return (
    <Container>
      <HeroSection>
        <Title>Posicionamiento en Google Maps</Title>
        <Subtitle>Genera confianza y credibilidad en tus clientes</Subtitle>
      </HeroSection>

      <Section>
        <SectionTitle>¿Por qué posicionarte en Google Maps?</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <IconWrapper>
              <FaMapMarkerAlt size={40} color="#2c3e50" /> {/* Color fijo */}
            </IconWrapper>
            <h3>Visibilidad Local</h3>
            <p>Aparece en las primeras posiciones cuando clientes buscan negocios como el tuyo en tu área</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper>
              <FaMobileAlt size={40} color="#2c3e50" /> {/* Color fijo */}
            </IconWrapper>
            <h3>Acceso Directo</h3>
            <p>Los clientes pueden contactarte con un clic desde su móvil</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper>
              <FaStar size={40} color="#2c3e50" /> {/* Color fijo */}
            </IconWrapper>
            <h3>Credibilidad</h3>
            <p>Perfil verificado con reseñas auténticas de clientes</p>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      <PriceSection>
  <PriceTag>¡Desde solo $300.000 COP!</PriceTag>
  <PriceDescription>
    Incluye creación y optimización completa del perfil:
    <ServiceDetails>
      <ServiceDetailItem>
        📸 Uso de las fotos proporcionadas por el cliente para mostrar su negocio.
      </ServiceDetailItem>
      <ServiceDetailItem>
        📞 Configuración del número de teléfono con el nombre de la empresa visible.
      </ServiceDetailItem>
      <ServiceDetailItem>
        ✔️ Perfil verificado y optimizado para mayor visibilidad.
      </ServiceDetailItem>
      <ServiceDetailItem>
        📧 Asignación de una cuenta de correo como propietario del negocio.
      </ServiceDetailItem>
      <ServiceDetailItem>
        🛠️ Configuración completa de horarios, categoría y descripción del negocio.
      </ServiceDetailItem>
      <ServiceDetailItem>
        Apareces en Google maps de 3 dias a 2 semanas maximo.
      </ServiceDetailItem>
      <ServiceDetailItem>
        Unico pago! ⭐
      </ServiceDetailItem>
    </ServiceDetails>
  </PriceDescription>
</PriceSection>

      <Section>
        <SectionTitle>Clientes que han confiado en nosotros</SectionTitle>
        <ClientGrid>
          {clients.map((client, index) => (
            <ClientCard key={index}>
              <ClientName>{client.name}</ClientName>
              <ClientAddress>{client.address}</ClientAddress>
              <MapContainer>
                <ResponsiveIframe
                  src={client.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${client.name}`}
                />
              </MapContainer>
            </ClientCard>
          ))}
        </ClientGrid>
      </Section>
    </Container>
  );
};

const ServiceDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  text-align: left;
`;

const ServiceDetailItem = styled.li`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;

  &::before {
    content: "•";
    color: #2c3e50;
    margin-right: 0.5rem;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;


const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;


const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const BenefitCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  h3 {
    color: #2c3e50; /* Color fijo */
    margin-bottom: 1rem;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
`;

const PriceSection = styled(Section)`
  text-align: center;
  background-color: #f8f9fa;
  padding: 3rem 1rem;
  border-radius: 8px;
`;

const PriceTag = styled.div`
  font-size: 2.5rem;
  color: #007fff; /* Color fijo */
  font-weight: bold;
  margin: 1rem 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PriceDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const ClientGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ClientCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ClientName = styled.h3`
  color: #2c3e50; /* Color fijo */
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ClientAddress = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 250px;
  border: 0;
  @media (min-width: 768px) {
    height: 300px;
  }
`;

export default GoogleMapsServicePage;