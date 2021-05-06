import React from 'react';
import ListComponent from '../ListComponent';

const ShowListComponent = (props) => {
    // restituisco listcomponet che è il componente che utilizzo per stampare a schermo i dati
    const {taskList, deleteTask} = props;
    return (
        <div>
            {taskList.length > 0 && taskList.map((current, index) => {
                return <ListComponent key={index} task={current} index={index} deleteTask={deleteTask}/>
            })}
        </div>
    );
}

export default ShowListComponent;