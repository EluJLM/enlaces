import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
  StyledNav,
  StyledLogo,
  StyledNavList,
  NavItem,
  MenuButton,
  MobileMenuBackdrop,
  ContentOne,
  Contacto
} from "./Nav.styled";
import { 
  cerrajeria, 
  solucioneswebs, 
  serviciotecnicosmartphone 
} from "../../routes/Routes_text";

const Nav = () => {
  const [activo, setActivo] = useState(false);

  const cerrarMenu = () => {
    if (window.innerWidth <= 700) {
      setActivo(false);
    }
  };

  return (
    <>
      <StyledNav>

        <ContentOne>
          <StyledLogo>
            <Link to="/">Enlaces DS</Link>
          </StyledLogo>

          <MenuButton onClick={() => setActivo(!activo)} aria-label="menu">
            {activo ? <FaTimes size={24} /> : <FaBars size={24} />}
          </MenuButton>

        </ContentOne>
        <MobileMenuBackdrop 
          open={activo} 
          onClick={() => setActivo(false)}
        />

        <StyledNavList open={activo}>
          <NavItem>
            <Link to="/" onClick={cerrarMenu}>Inicio</Link>
          </NavItem>
          <NavItem>
            <Link to={solucioneswebs} onClick={cerrarMenu}>Webs</Link>
          </NavItem>
          <NavItem>
            <Link to={serviciotecnicosmartphone} onClick={cerrarMenu}>Servicio tecnico</Link>
          </NavItem>
          <NavItem>
            <Link to={cerrajeria} onClick={cerrarMenu}>Cerrajeria</Link>
          </NavItem>

          {activo &&
          <Contacto>

            <h3>Contacto</h3>
            <a href="mailto:elulozano@enlacesds.com">Enviar un Email</a>
          </Contacto>
          }
        </StyledNavList>

      </StyledNav>
    </>
  );
};

export default Nav;