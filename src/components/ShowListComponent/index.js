import React, { useEffect, useState } from 'react';

const ShowListComponent = (props) => {
    const { title, description } = props;
    //map mi restituisce un array trasformato
    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <p>task: {title}</p>
                        <p>descrizione task: {description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowListComponent;

//per passare dati dal figlio al padre il padre deve passare al figlio una callback e il figlio la deve innvocare