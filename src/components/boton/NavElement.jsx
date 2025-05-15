import styled from 'styled-components';
import { FaLaptopCode, FaWrench, FaKey } from 'react-icons/fa';

// Mapeo de iconos
const iconMap = {
  web: FaLaptopCode,
  tech: FaWrench,
  locksmith: FaKey,
};

// Componente estilizado base
const StyledNavElement = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: ${({ $isHeading }) => ($isHeading ? '15px 30px' : '10px 20px')};
  font-size: ${({ $isHeading }) => ($isHeading ? '24px' : '16px')};
  border: none;
  cursor: ${({ $isButton }) => ($isButton ? 'pointer' : 'default')};
  border-radius: 5px;
  transition: transform 0.2s ease, background-color 0.3s ease;
  min-width: 200px;
  justify-content: center;
  font-weight: bold;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'tech':
        return '#00c445';
      case 'locksmith':
        return '#ff6600';
      default: // web
        return '#007bff';
    }
  }};
  color: white;

  &:hover {
    transform: ${({ $isButton }) => ($isButton ? 'scale(1.05)' : 'none')};
  }

  svg {
    margin-right: 5px;
    font-size: ${({ $isHeading }) => ($isHeading ? '24px' : '20px')};
  }
`;

const NavElement = ({
  variant = 'web',
  elementType = 'button',
  onClick,
  children
}) => {
  const isButton = elementType === 'button';
  const isHeading = elementType === 'h2';
  const Icon = iconMap[variant];

  return (
    <StyledNavElement
      as={elementType}
      variant={variant}
      $isButton={isButton}
      $isHeading={isHeading}
      onClick={isButton ? onClick : undefined}
    >
      <Icon />
      {children}
    </StyledNavElement>
  );
};

export default NavElement;