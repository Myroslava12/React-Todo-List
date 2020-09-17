import React, { useEffect } from 'react';


const Form = ({itemValue, setItemValue, priorityValue, setPriotityValue, setItemsSelect, todoItems, setTodoItems, error, setError}) => {

    const handleItemValue = (e) => setItemValue(e.target.value);

    const handlePriorityValue = (e) => setPriotityValue(e.target.value);

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: todoItems.length + 1,
            title: itemValue,
            priority: priorityValue,
            completed: false,
        }
        setTodoItems((items) => [...items, newTask]);
        setItemValue('');
        setPriotityValue('');
    }


    return (
        <form onSubmit={(itemValue.length !== 0 && priorityValue < 10 && priorityValue > 1) ? addNewTask: null}>
            <div>
                <input onChange={handleItemValue} className="input--add--task" type='text' value={itemValue} placeholder='Task name' />
                <input onChange={handlePriorityValue} type='number' value={priorityValue} placeholder='Task priority from 1 to 10' />
                <button disabled={(itemValue.length == '' && priorityValue.length == '') ? true : false} type="submit" className="add--task"><i className="fa fa-plus"></i></button>
            </div>
            {/* {error ? <p>Podaj zadanie i wpisz priorytet zadania od 1 do 10</p> : null} */}
            
            <select className="form--select" onChange={e => setItemsSelect(e.target.value)}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Uncompleted'>Uncomplated</option>
            </select>
        </form>
    )
}


export default Form;