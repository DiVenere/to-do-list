import React, { useEffect, useState } from 'react'
import './App.css';
import AddToListComponent from './components/AddToListComponent';
import ButtonComponent from './components/ButtonComponent';
import DeletedListComponent from './components/DeletedListComponent';
import ShowListComponent from './components/ShowListComponent';

function App() {
  //stato per la lista dei task NB: array vuoto
  const [taskList, upgradeTaskList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);

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
    
    /*aggiungiamo gli uguali*/

    const deletedTask = taskList.map((curr, arrIndex) => ({task: curr, index: arrIndex})).filter((curr, arrIndex)=>{
      return arrIndex === index && curr.task === taskList[index];
    });
    console.log("task eliminati", deletedTask);
    setDeletedList([...deletedList, ...deletedTask]);
    upgradeTaskList(newTaskList);
  }

  const handleEdit = (task, index) => {
    console.log("ho ricevuto il task", { task, index });
    const newTaskList = taskList.map((current, i) => {
      return i === index ? task : current;
    });
    upgradeTaskList(newTaskList);

    //const array a,b,c,d  sostituire elemento in pos 1 con s
  }

  const restoreTask = (deletedTask) => {
    /*["uno","due","tre"]
      deletedTask = {
        task: "quattro",
        index: 3
      }
    */
      const restoredArray = [...taskList.slice(0, deletedTask.index),deletedTask.task,...taskList.slice(deletedTask.index)];
      upgradeTaskList(restoredArray);
      const newDeletedList = deletedList.filter(current => current.index != deletedTask.index);
      setDeletedList(newDeletedList);
  }

  /*useEffect(()=>{
    console.log("mounted");
  }, [])
  
  //quando cambia tasklist
  useEffect(()=>{
    console.log("mounted");
  }, [taskList])*/

  return (
    <div className={"App"}>
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-8"}>
            <AddToListComponent action={handleAddTask} />
            {/*ShowListComponent è il componente che contiene tutta la lista
            e passo come prop padre figlio lo stato della mia lista e la callback*/}
            <ShowListComponent taskList={taskList} deleteTask={handleDeleteTaskByIndex} editTask={handleEdit} />
            {/*show deleted list component, sarà condizionale e button sempre fisso*/}
          </div>
          <div className={"col-4 pt-5"}>
            <ButtonComponent text={"cestino"}/>
            <DeletedListComponent deletedList={deletedList} restoreTask = {restoreTask}/>
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

//sul delete i task vengono eliminati ma anche salvati in un cestino
//cliccando sul cestino si apre un'altra lista di elementi eliminati
//svuota lista => elimina tutti gli elementi
//elimina elemento => elimina definitivamente l'elemento 
//ripristina elemento => rimette il task in lista nella stessa posizione in cui era prima

//EXTRA
//sul click del cestino mostro gli elementi in maniera semi-permanente
