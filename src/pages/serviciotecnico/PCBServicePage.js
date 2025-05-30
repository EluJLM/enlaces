import styled from 'styled-components';
import { useState } from 'react';
import { FaRuler, FaCalculator, FaMoneyBillWave, FaPhone } from 'react-icons/fa';
import { HeroSection, Section, SectionTitle} from '../../components/styled/styled';

const PCBServicePage = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [drills, setDrills] = useState([]);
  const [serviceType, setServiceType] = useState('taladros');
  const [error, setError] = useState('');

  // Precios base
  const PRECIOS = {
    taladros: 90,
    una_cara: 90+150,
    dos_caras: 88+90+55
  };

  const calcularPrecio = () => {
    const area = parseFloat(width) * parseFloat(height);
    let precio = area * PRECIOS[serviceType];
    
    // Costo adicional por brocas extras
    const brocasExtras = Math.max(drills.length - 3, 0);
    if(brocasExtras > 0) precio += brocasExtras * 1000;
    
    return Math.max(precio, 10000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!width || !height || width <= 0 || height <= 0) {
      setError('Ingrese medidas válidas');
      return;
    }
    setError('');
  };

  const toggleDrill = (size) => {
    setDrills(prev => 
      prev.includes(size) 
        ? prev.filter(d => d !== size) 
        : [...prev, size]
    );
  };

  return (
    <Container>
      <HeroSection bgColor="#00c445">
        <Title>Fabricación de PCB</Title>
        <Subtitle>Manejamos en brocas desde 0.3 asta 1.2 mm</Subtitle>
      </HeroSection>
      
      <Section>
      <SectionTitle>Nuestros Servicios</SectionTitle>
  
  <PricingInfo>
    <ServiceCard>
      <h3><FaRuler /> Solo Taladros</h3>
      <Price>$90/cm²</Price>
      <ul>
        <li>Incluye placa de baquelita FR-4</li>
        <li>Hasta 3 brocas diferentes</li>
        <li>Precisión industrial</li>
      </ul>
    </ServiceCard>

    <ServiceCard highlight>
      <h3><FaCalculator /> Taladros + 1 Cara</h3>
      <Price>$240/cm²</Price>
      <ul>
        <li>Incluye revelado de 1 cara</li>
        <li>Material FR-4</li>
        <li>Proceso rápido</li>
      </ul>
    </ServiceCard>
  </PricingInfo>

  <ContactBox>
    <QRContainer>
      <img src="/qrcode.png" alt="QR de contacto" />
      <span>Escanea para cotizar</span>
    </QRContainer>
    
    <PhoneLink href="tel:+573022547603">
      <FaPhone />
      <div>
        <span>Escribe al</span>
        <PhoneNumber>+57 302 2547603</PhoneNumber>
      </div>
    </PhoneLink>
  </ContactBox>
      </Section>

      <Section>
        <SectionTitle>Cotiza</SectionTitle>
        <CalculatorForm onSubmit={handleSubmit}>
          <ServiceTypeSelector>
            <legend>Tipo de servicio: FR-4</legend>
            <ServiceOption>
              <input 
                type="radio" 
                name="serviceType"
                value="taladros"
                checked={serviceType === 'taladros'}
                onChange={(e) => setServiceType(e.target.value)}
              />
              <span>Solo taladros ($90/cm²)</span>
            </ServiceOption>
            
            <ServiceOption>
              <input 
                type="radio" 
                name="serviceType"
                value="una_cara"
                checked={serviceType === 'una_cara'}
                onChange={(e) => setServiceType(e.target.value)}
              />
              <span>1 cara + taladros ($90 + $150 /cm²)</span>
            </ServiceOption>
            <ServiceOption>
              <span>Proximamente dos caras y Serigrafia</span>
              </ServiceOption>
            
            {/*<ServiceOption>
              <input 
                type="radio" 
                name="serviceType"
                value="dos_caras"
                checked={serviceType === 'dos_caras'}
                onChange={(e) => setServiceType(e.target.value)}
              />
              <span>2 caras + taladros ($88 + $90 + $55/cm² extra)</span>
            </ServiceOption>*/}
          </ServiceTypeSelector>

          <InputGroup>
            <label>
              <FaRuler /> Ancho (cm)
              <Input 
                type="number" 
                step="0.1"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Ej: 20"
              />
            </label>
            
            <label>
              <FaRuler /> Alto (cm)
              <Input 
                type="number" 
                step="0.1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ej: 15"
              />
            </label>
          </InputGroup>

          {/*<DrillOptions>
            <legend><FaCalculator /> Diámetros de perforación (selección múltiple):</legend>
            {['0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0', '1.1', '1.2'].map((size) => (
              <DrillOption key={size}>
                <input 
                  type="checkbox"
                  checked={drills.includes(size)}
                  onChange={() => toggleDrill(size)}
                />
                <span>{size} mm</span>
              </DrillOption>
            ))}
            <DrillWarning>
              {drills.length > 3 && 
                `+${drills.length - 3} brocas extras ($${(drills.length - 3) * 1000} COP)`}
            </DrillWarning>
          </DrillOptions>*/}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <PriceDisplay>
            <FaMoneyBillWave size={24} />
            <TotalPrice>${calcularPrecio().toLocaleString()} COP</TotalPrice>
            <TotalPrice>{height*width} cm²</TotalPrice>
            <PriceBreakdown>
              <div>Precio base: ${(width * height * PRECIOS[serviceType] || 0).toLocaleString()}</div>
              {drills.length > 3 && 
                <div>+ Brocas extras: ${((drills.length - 3) * 1000).toLocaleString()}</div>}
              <div>Mínimo de pedido: $10,000 COP</div>
            </PriceBreakdown>
          </PriceDisplay>

          <ResetButton type="button" onClick={() => {
            setWidth('');
            setHeight('');
            setDrills([]);
            setServiceType('taladros');
            setError('');
          }}>
            Reiniciar
          </ResetButton>
        </CalculatorForm>
      </Section>

      <SpecsSection>
        <SpecsGrid>
          <SpecCard>
            <h3><FaRuler /> Especificaciones Técnicas</h3>
            <ul>
              <li>Manejamos brocas desde 0.3mm hasta 1.2mm</li>
              <li>Material: Baquelita FR-4</li>
              <li>Tiempo de entrega: 1 a 3 días hábiles</li>
              <li>No se entrega con serigrafia mas adelante</li>
            </ul>
          </SpecCard>
          
          <SpecCard>
            <h3><FaMoneyBillWave /> Políticas</h3>
            <ul>
              <li>Más de 3 brocas diferentes: $1,000 COP adicionales por broca</li>
              <li>Mínimo de pedido: $10,000 COP</li>
              <li>Pago 50% anticipado</li>
              <li>Archivos Gerber de Perforaciones( Drill)</li>
              <li>PDF del bottom y/o top vias requeridos</li>
              <li>El top o el bottom deben de tener plano de tierra</li>
            </ul>
          </SpecCard>
        </SpecsGrid>
      </SpecsSection>
    </Container>
  );
};

// Estilos actualizados
const ServiceTypeSelector = styled.fieldset`
  border: 2px solid #00c445;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  legend {
    padding: 0 0.5rem;
    font-weight: bold;
    color: #2c3e50;
  }
`;

const ServiceOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
  color: #444;
  
  input {
    accent-color: #00c445;
    width: 18px;
    height: 18px;
  }
  
  span {
    flex: 1;
    font-weight: 500;
  }
`;

const DrillWarning = styled.div`
  color: #dc3545;
  margin-top: 1rem;
  font-weight: 500;
`;
// Estilos completos
const Container = styled.div`
  max-width: 1500px;
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
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;




const CalculatorForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const InputGroup = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;

  label {
    font-weight: 500;
    color: #2c3e50;
    
    svg {
      margin-right: 8px;
      vertical-align: middle;
    }
  }

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #00c445;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 0.5rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 127, 255, 0.2);
  }
`;

const DrillOptions = styled.fieldset`
  border: 2px solid #00c445;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  legend {
    padding: 0 0.5rem;
    font-weight: bold;
    color: #2c3e50;
  }
`;

const DrillOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
  color: #444;
  
  input {
    accent-color: #00c445;
    width: 18px;
    height: 18px;
  }
  
  span {
    flex: 1;
  }
`;

const PriceDisplay = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 2rem 0;
`;

const TotalPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00c445;
  margin: 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PriceBreakdown = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
  
  div {
    margin: 0.3rem 0;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  background: #ffeef0;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  text-align: center;
  font-weight: 500;
`;

const ResetButton = styled.button`
  background: #2c3e50;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`;

const SpecsSection = styled(Section)`
  background: #f8f9fa;
  border-radius: 8px;
`;

const SpecsGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SpecCard = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: #00c445;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 0.8rem 0;
      padding-left: 1.5rem;
      position: relative;
      color: #444;
      
      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #2c3e50;
        font-weight: bold;
      }
    }
  }
`;

const PricingInfo = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 2rem 0;
`;

const ServiceCard = styled.div`
  padding: 1.5rem;
  background: ${props => props.highlight ? '#f8fff0' : 'white'};
  border-radius: 12px;
  border: 2px solid ${props => props.highlight ? '#00c445' : '#eee'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 0.8rem 0;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #00c445;
      }
    }
  }
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #00c445;
  margin: 1rem 0;
`;

const ContactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const QRContainer = styled.div`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border: 2px solid #00c445;
    padding: 0.5rem;
    border-radius: 12px;
  }
  
  span {
    display: block;
    margin-top: 0.5rem;
    color: #666;
    font-size: 0.9rem;
  }
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #00c445, #009933);
  color: white !important;
  border-radius: 50px;
  text-decoration: none !important;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.5rem;
  }
  
  div {
    display: flex;
    flex-direction: column;
  }
`;

const PhoneNumber = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;


export default PCBServicePage;