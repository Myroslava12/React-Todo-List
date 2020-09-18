import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  const [itemValue, setItemValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('');
  const [itemsSelect, setItemsSelect] = useState('All');
  const [todoItems, setTodoItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTasksFromLocal();
  }, []);

  useEffect(() => {
    filterHandle();
    saveToLocalStorage();
  }, [todoItems, itemsSelect]);

  const filterHandle = () => {
    switch (itemsSelect) {
      case "Completed" :
        setFilteredTasks(todoItems.filter(item => item.completed === true));
        break;
      case "Uncompleted" :
        setFilteredTasks(todoItems.filter(item => item.completed === false));
        break;
      default : 
        setFilteredTasks(todoItems);
        break;
    }
  }

  // Save to Local tasks
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }

  const getTasksFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let tasksFromLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(tasksFromLocal);
      setTodoItems(tasksFromLocal);
    }
  }

  return (
    <>
      <Header />
      <main className="app--main container">
        <Form 
          itemValue={itemValue} 
          setItemValue={setItemValue} 
          priorityValue={priorityValue}
          setPriotityValue={setPriorityValue}
          itemsSelect={itemsSelect}
          setItemsSelect={setItemsSelect}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          error = {error}
          setError={setError}
        />
        <ToDoList 
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          edit={edit}
          setEdit={setEdit}
          itemsSelect={itemsSelect}
          filteredTasks={filteredTasks}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
