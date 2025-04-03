import styled from "styled-components";


export const HeroSection = styled.div`
  text-align: center;
  padding: 2rem 0;
  background-color: ${props => props.bgColor || '#007fff'};
  color: white;
  border-radius: 8px;
  margin-top: 5rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Section = styled.div`
  padding: 2rem 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
