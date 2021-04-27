import React, { useState } from 'react'
import "./index.css"

const AddToListComponent = (props) => {
    //mi prendo la prop action
    const {action} = props;
    const [task, setTask] = useState("");
    //stati errore
    const [taskError, setTaskError] = useState("");
    //stati buttons
    //const [objectValue, setObjectValue] = useState("");
    //const [errorObjectValue, setErrorValue] = useState("");

    //posso destrutturare le props in quanto e come se fosse un oggetto
    //const {nome, cognome} = props;

    const handleChange = (e) => {
        setTask(e.target.value);
        setTaskError("");
        console.log(e.target.value);
    }


    const handleBlurOnlyLetters = (e) => {
        if (!/^[a-z0-9]+$/i.test(e.target.value)) {
            setTaskError("errore nel campo");
        }
    }

    const handleClick = () =>{
        action(task);
    }

    return (
        <div className={"AddToListComponent"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className="input-container">
                            <input onChange={handleChange} onBlur={handleBlurOnlyLetters} value={task} className={"input"} name="name" placeholder="Il campo non accetta caratteri speciali" />
                            {taskError ? <span className={"error"}>{taskError}</span> : null}
                        </div>
                    </div>
                    <div className={"col-6"}>
                            <button onClick={handleClick}>Aggiungi in lista</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToListComponent;