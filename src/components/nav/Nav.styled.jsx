import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const slideDown = keyframes`
  from {
    top: -100px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

export const ContentOne = styled.div`
  @media (max-width: 700px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 3;
      border-bottom: 2px solid #fff;
  }
`;

export const StyledNav = styled.nav`
  padding: 16px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 6px #00000066;
  
  color: #007fff;
  z-index: 1000;
  animation: ${slideDown} 0.5s ease-out;
  @media (max-width: 700px) {
    padding: 10px 20px;
  }
`;

export const StyledLogo = styled.h1`
  background: #fff;
  a {
    color: #007fff;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.azureDark};
    }
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 15px;

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 85%;
    height: 105vh;
    flex-direction: column;
    padding-top: 60px;
    background: #fff;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
    transition: left 0.3s ease-in-out;
    z-index: 1;
  }
`;

export const NavItem = styled.li`
  a {
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    color: #007fff;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.azure};
      transition: width 0.3s ease;
    }

    &:hover {
      background: ${({ theme }) => theme.azureLight};
      color: ${({ theme }) => theme.azureDark} !important;
      
      &:before {
        width: 100%;
      }
    }

    @media (max-width: 700px) {
      display: block;
      width: 100%;
      padding: 15px;
      font-size: 18px;
      
      &:hover {
        background: ${({ theme }) => theme.azure};
        color: ${({ theme }) => theme.white} !important;
      }
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #007fff;
  background: none;
  border: none;
  padding: 10px;
  z-index: 3;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 700px) {
    display: block;
  }
`;

export const MobileMenuBackdrop = styled.div`
  display: none;
  
  @media (max-width: 700px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

export const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;