import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import './index.css'

const EditComponent = (props) => {
    const { taskToEdit, discard, edit} = props;
    const [textValue, setTextValue] = useState(taskToEdit);

    const handleDiscard = () =>{
        discard()
    }

    const handleChange = (e) =>{
        setTextValue(e.target.value);
    }

    const handleEdit = () =>{
        edit(textValue);
    }

    return (
        <>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <div className={"row"}>
                            <div className={"col-8"}>
                                <input onChange = {handleChange} className={"task"} value={textValue} placeholder="inserisci task" />
                            </div>
                            <div className={"col-4 d-flex align-items-center"}>
                                {/*<button className={"button"}>save</button>*/}
                                <ButtonComponent text="save" action={handleEdit}/>
                                <button onClick={handleDiscard} className={"button"}>discard</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default EditComponent;