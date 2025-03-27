import styled from 'styled-components';
import { useState } from 'react';
import { FaRuler, FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

const PCBServicePage = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diametro, setDiametro] = useState('0.3');
  const [error, setError] = useState('');

  const calcularPrecio = () => {
    const area = parseFloat(width) * parseFloat(height);
    let precio = area * 88;
    
    if(diametro === '1.6') precio += area * 5;
    
    return Math.max(precio, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!width || !height || width <= 0 || height <= 0) {
      setError('Ingrese medidas válidas');
      return;
    }
    setError('');
  };

  return (
    <Container>
      <HeroSection>
        <Title>Fabricación de PCB Personalizadas</Title>
        <Subtitle>Precisión industrial con acabado profesional</Subtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Cotizador Instantáneo</SectionTitle>
        <CalculatorForm onSubmit={handleSubmit}>
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

          <DrillOptions>
            <legend><FaCalculator /> Diámetro de perforación:</legend>
            <DrillOption>
              <input 
                type="radio" 
                name="diametro"
                value="0.3" 
                checked={diametro === '0.3'}
                onChange={(e) => setDiametro(e.target.value)}
              />
              <span>0.3 mm (Estándar)</span>
            </DrillOption>

            <DrillOption>
              <input 
                type="radio" 
                name="diametro"
                value="0.8" 
                checked={diametro === '0.8'}
                onChange={(e) => setDiametro(e.target.value)}
              />
              <span>0.8 mm</span>
            </DrillOption>

            <DrillOption>
              <input 
                type="radio" 
                name="diametro"
                value="1.2" 
                checked={diametro === '1.2'}
                onChange={(e) => setDiametro(e.target.value)}
              />
              <span>1.2 mm</span>
            </DrillOption>

            <DrillOption>
              <input 
                type="radio" 
                name="diametro"
                value="1.6" 
                checked={diametro === '1.6'}
                onChange={(e) => setDiametro(e.target.value)}
              />
              <span>1.6 mm (+$5/cm²)</span>
            </DrillOption>
          </DrillOptions>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <PriceDisplay>
            <FaMoneyBillWave size={24} />
            <TotalPrice>${calcularPrecio().toLocaleString()} COP</TotalPrice>
            <PriceBreakdown>
              <div>Precio base: ${(width * height * 88 || 0).toLocaleString()}</div>
              {diametro === '1.6' && <div>+ Broca especial: ${(width * height * 5 || 0).toLocaleString()}</div>}
              <div>Mínimo de pedido: $5,000 COP</div>
            </PriceBreakdown>
          </PriceDisplay>

          <ResetButton type="button" onClick={() => {
            setWidth('');
            setHeight('');
            setDiametro('0.3');
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
              <li>Huecos desde 0.3mm hasta 1.6mm</li>
              <li>Precisión ±0.05mm</li>
              <li>Material: Baquelita FR-4</li>
              <li>Tiempo de entrega: 1 a 3 días hábiles</li>
            </ul>
          </SpecCard>
          
          <SpecCard>
            <h3><FaMoneyBillWave /> Políticas</h3>
            <ul>
              <li>Mínimo de pedido: $5,000 COP</li>
              <li>Pago 50% anticipado</li>
              <li>Archivos Gerber y PDF del bottom y/o top vias requeridos</li>
              <li>El top o el bottom deben de tener plano de tierra</li>
            </ul>
          </SpecCard>
        </SpecsGrid>
      </SpecsSection>
    </Container>
  );
};

// Estilos completos
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  background-color: #007fff;
  color: white;
  margin-bottom: 2rem;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
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

const Section = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
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
  border: 2px solid #007fff;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 0.5rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 127, 255, 0.2);
  }
`;

const DrillOptions = styled.fieldset`
  border: 2px solid #007fff;
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
    accent-color: #007fff;
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
  color: #007fff;
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
    color: #007fff;
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

export default PCBServicePage;