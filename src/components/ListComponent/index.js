import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import EditComponent from '../EditComponent/';
import './index.css';



const ListComponent = (props) => {
    const [edit, setEdit] = useState(false);
    
    const { task, deleteTask, index } = props;
    //map mi restituisce un array trasformato

    const handleDelete = () =>{
        deleteTask(index);
    }

    const handleEdit = () =>{  
      setEdit(true);  
    }

    const handleSetEdit = () =>{
        setEdit(false);
    }


    return (
        <>
            <div className={"container"}>
                <div className={"row mb-4"}>
                    <div className={"col-8"}>
                            {edit ? <EditComponent discard={handleSetEdit} taskToEdit={task} edit={edit}/> : <p className={"task"}>{task}</p>}
                    </div>

                    {!edit ? <div className={"col-4 d-flex align-items-center"}>
                        {/*importiamo il componente per il button passiamo padre figlio le props text e action*/}
                        {<ButtonComponent text={"delete"} action={handleDelete}/>}
                        {/*aggiungiamo sempre il componente button  per editare il task*/}
                        {<button className={"button"} onClick={handleEdit}>edit</button>}
                    </div>: null}
                </div>
            </div>
        </>
    );
}

export default ListComponent;

//per passare dati dal figlio al padre il padre deve passare al figlio una callback e il figlio la deve innvocare