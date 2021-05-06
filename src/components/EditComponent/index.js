import React, { useState } from 'react';
import './index.css'

const EditComponent = (props) => {
    const { taskToEdit, discard} = props;

    const handleDiscard = () =>{
        discard()
    }

    return (
        <>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <div className={"row"}>
                            <div className={"col-8"}>
                                <input className={"task"} value={taskToEdit} placeholder="inserisci task" />
                            </div>
                            <div className={"col-4 d-flex align-items-center"}>
                                <button className={"button"}>save</button>
                                <button onClick={handleDiscard} className={"button"}>discard</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default EditComponent;