import React, {useState } from 'react'
import './App.css';
import AddToListComponent from './components/AddToListComponent';
import ShowListComponent from './components/ShowListComponent';

function App() {
  //stato per la lista dei task NB: array vuoto
  const [taskList, upgradeTaskList] = useState([]);


  const handleAddTask = (task) => {
    //la lista è formata da i task precedenti e l'ultimo aggiunto
      const newTaskList = [...taskList, task];
      //modifico lo stato con la newTaskList
      upgradeTaskList(newTaskList);
  }

  const handleDeleteTaskByIndex = (index) => {
    //abbiamo 3 metodi per poterlo fare gestendo i duplicati

    //splice no per gli stati modifica l'array originale
    //const newTaskList = [...taskList];
    //se faccio const copyTask = [taskList] è sbagliato;
    //newTaskList.splice(index,1)

    //slice fa una copia dell'array e mi restituisce quel pezzo
    //prendo a pezzi gli elementi dell'array che avrò poi in copia 
    //const firstPart = taskList.slice(0, index); //index sarà escluso
    //const secondPart = taskList.slice(index + 1); //non specifico la fine
    //concateniamo gli array
    //const newTaskList = firstPart.concat(secondPart); //adesso abbiamo l'array finale tranne l'elemento eliminato

    //filter metodo che utilizziamo index //index sta per l'elemento da eliminare
    const newTaskList = taskList.filter((curr, arrIndex) => arrIndex !== index);
    upgradeTaskList(newTaskList);
  }

  

  return (
    <div className={"App"}>
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-12"}>
            <AddToListComponent action={handleAddTask} />
            {/*ShowListComponent è il componente che contiene tutta la lista
            e passo come prop padre figlio lo stato della mia lista e la callback*/}
            <ShowListComponent taskList={taskList} deleteTask={handleDeleteTaskByIndex}/>
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

//continuazione esercizio
//fixare l'aggiunta di task vuoti (V)
//aggiungere un button edit su listComponent con di fianco due pulsanti salva e discard su salva si toglie l'input e rimane l'elenento modificato
//extra: creare un cestino con tutti i task eliminati
