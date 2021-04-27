import React from 'react';

const DisplayProps = (props) =>{
    //agiungo action alle props
    const {firstName, lastName, action} = props;

    const handleClick = () =>{
      //qui dentro invochiamo action ovvero la nostra prop
      action("arg1", "arg2")
    }
    return(
        <>
            <p>{firstName || "nome mancante"}</p>
            <p>{lastName || "cognome mancante"}</p>
            {/*aggiungiamo un button*/}
            <button onClick={handleClick}>CLICK ME</button>
        </>
    );
}

export default DisplayProps;

//per passare dati dal figlio al padre il padre deve passare al figlio una callback e il figlio la deve innvocare