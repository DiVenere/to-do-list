import React from 'react';
import './index.css'

const ButtonComponent = (props) => {
    //a questo componente devono arrivare testo e azione
    const {text, action, edit} = props;
    const handleClick = () =>{
      //passiamo l'azione
      action();  
    }

    return (
        <button className= {"button"} onClick={handleClick}>{text}</button>
    );
}

export default ButtonComponent;