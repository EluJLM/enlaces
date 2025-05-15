import { useState } from "react"
import styled, { keyframes } from 'styled-components';


import { FaLaptopCode, FaWrench, FaKey } from "react-icons/fa";
import NavElement from "./boton/NavElement";

// Animación personalizada
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

const SectionOneStyled = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    min-height: 100vh;
    box-shadow: 0 0 6px #00000050;
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;
    header{
        width: 100%;
        padding: 10px 30px;
        color: var(--bluelight);
    }
    h2 {
        margin-bottom: 10px;
        animation: ${fadeUp} 0.6s ease-out forwards;
        opacity: 0;
    }
    h1 {
        font-size: 44px;
        margin-top: 50px;
        animation: ${fadeUp} 0.6s 0.2s ease-out forwards; 
        text-align: center;
        opacity: 0;
    }

    p {
        color: var(--black);
        font-size: 18px;
        margin: 30px auto;
        text-align: center;
        animation: ${fadeUp} 0.6s 0.4s ease-out forwards;
        opacity: 0;
    }
`;

const SectionOne = ({text1, text2, textp, variant}) => {
    return(
    <SectionOneStyled>
        <header>
            <NavElement
                variant={variant}
                elementType="h2"
                >
                {text1}
            </NavElement>

            <h1>{text2}</h1>
            <p>{textp}</p>
        </header>
    </SectionOneStyled>
    )
}

const SectionTwos = ({titulo, text, titleListOne,listOne, titleListTwo, listTwo, button}) => {
    return(
    <section className="section-twos">
        <header>
            <h2>{titulo}</h2>
            <h3>{text}</h3>
        </header>
        {titleListOne &&
        <div className="list">
             
            <h3 className="titlelist">{titleListOne}</h3>
            <ul>
                {listOne && listOne.map((val, i) => {
                    return (<li key={i}>{val}</li>);
                })}
            </ul>
        </div>
        }
        {titleListTwo && 
            <div className="list">
                <h3 className="titlelist">{titleListTwo}</h3>
                <ul>
                {listTwo && listTwo.map((val, i) => {
                    return (<li key={i}>{val}</li>);
                })}
                </ul>
            </div>
        }
        {button &&
        <button onClick={button}>Saber mas</button>
        }
    </section>
    )
}

export {SectionOne, SectionTwos};