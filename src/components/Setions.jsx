import { useState } from "react"


const SectionOne = ({text1, text2, textp}) => {
    return(
    <section className="section-one">
        <header>
            <h2>{text1}</h2>
            <h1>{text2}</h1>
            <p>{textp}</p>
        </header>
    </section>
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