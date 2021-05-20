import React, { useState } from 'react';
//import ButtonComponent from '../ButtonComponent';
//import EditComponent from '../EditComponent/';
import ListComponent from '../ListComponent';
import './index.css';


//componente con tutti gli elementi eliminati
const DeletedListComponent = (props) => {
    const { deletedList, restoreTask } = props;
    /*["ciao", "ciao2"]
        [<ListComponent key={0} task={"ciao"} index={0}/>, <ListComponent key={1} task={"ciao2"} index={1}/>]
    */
    return (
        <div>
            {deletedList.length > 0 && deletedList.map((current, index) => {
                return <ListComponent key={index} task={current.task} index={current.index} restoreTask={restoreTask}/>
            })}
        </div>
    );
}

export default DeletedListComponent;

//per passare dati dal figlio al padre il padre deve passare al figlio una callback e il figlio la deve innvocare