import React, { useEffect, useState } from 'react'
import './App.css';
import AddToListComponent from './components/AddToListComponent';
import ShowListComponent from './components/ShowListComponent';



function App() {
  //in app abbiamo la lista dei task
  const [task, setTask] = useState("");
  const taskList = [
    {
      title: "Button Component",
      description: "Realizzare un componente button, con classi per le diverse dimensioni"
    },
    {
      title: "Banner Component",
      description: "Realizzare un componente banner che deve avere un'immagine centrale"
    }
  ]

  const handleAction = (takeTask) =>{
    console.log("task: ", takeTask);
    //setTask(takeTask);
    //this.taskList.push(setTask(takeTask))
    taskList.push(setTask(takeTask));
  }

  return (
    <div className={"App"}>
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-12"}>
            <AddToListComponent action = {handleAction}/>
            <div>
              {taskList.length > 0 && taskList.map((current, index) => {
                const { title, description} = current;
                return <ShowListComponent key={index} title={title} description={description}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//esercizio to do list
//un input dove scrivere il task da aggiungere (no caratteri speciali solo alfa num)
//affianco all'input un bottone che agiunge il task in lista
//sotto la lista delle cose da fare
//affianco ad ogni voce ci deve essere un pulsante x elimina che cancella la voce dalla lista
//extra pulsante edita (affianco a delete) che trasforme la vocce in un input modificabile con un save
//e ti toglir dall'edit mode

//l'input deve essere uno
//lista deve essere un componente paratremizzato
//list component stamperò solo l'elemento
//il centro di comando deve essere App e l'unico a modificare la lista dei task


