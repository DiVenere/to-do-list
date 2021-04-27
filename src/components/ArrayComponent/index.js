import React from 'react';

const ArrayComponent = (props) =>{
    //aggiungo la props select movie
    const {selectMovie} = props;
    const array = [
        {title: "titanic", year: 1999},
        {title: "inception", year: 2010}
    ];

    /*const handleClick = (el) =>{
       console.log(el);
    }*/

    const handleSelectMovie = (filmInfo) =>{
        selectMovie(filmInfo);
    }

    //map mi restituisce un array trasformato
    return(
        <>
         <ul>
           {array.length > 0 && array.map((current, index) => {
             const {title, year} = current;
             return <li onClick = {() => handleSelectMovie(current)}
             key={index}>
                 <h1>{title}</h1>
                 <h2>{year}</h2></li>
           })}
           </ul>
        </>
    );
}

export default ArrayComponent;

//per passare dati dal figlio al padre il padre deve passare al figlio una callback e il figlio la deve innvocare