import React, { useState } from 'react'
import "./index.css"

const AddToListComponent = (props) => {
    //mi prendo la prop action
    const {action} = props;
    const [task, setTask] = useState("");
    //stati errore
    const [taskError, setTaskError] = useState("");
    
    const handleChange = (e) => {
        setTask(e.target.value);
        setTaskError("");
        console.log(e.target.value);
    }


    const handleBlurOnlyLetters = (e) => {
        if (!/^[a-z0-9]+$/i.test(e.target.value)) {
            setTaskError("non accetta caratteri speciali");
        }
    }

    const handleClick = () =>{
        action(task);
        //una volta aggiunto resetto il task nell'input
        setTask("");
    }

    return (
        <div className={"AddToListComponent"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className="input-container">
                            <input onChange={handleChange} onBlur={handleBlurOnlyLetters} value={task} className={"input"} name="name" placeholder="Inserisci task"/>
                            {/*gestione errore*/}
                            {taskError ? <span className={"error"}>{taskError}</span> : null}
                        </div>
                    </div>
                    <div className={"col-6"}>
                            {/*disabilitiamo il button nel momento in cui c'è un errore
                            passiamo chiaramente il task al padre con la prop action*/}
                            <button className={"add-button"} disabled = {taskError.length > 0 || !task.length > 0} onClick={handleClick}>Inserisci Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToListComponent;