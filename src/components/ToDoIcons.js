import React from 'react';


const ToDoIcons = ({item, todoItems, setTodoItems, edit, setEdit}) => {

    const deleteTask = () => {
        setTodoItems(todoItems.filter(el => el.id !== item.id))
    }

    const handleCompleted = () => {
        setTodoItems(todoItems.map(el => {
            if (el.id === item.id) {
               return {
                   ...el, completed: !item.completed,
               }
            }
            return el;
        }))
    }

    const editTask = () => setEdit((prev) => !prev);

    return (
        <div className="box--icons">
            <button onClick={handleCompleted} className="btn--icons"><i className="fa fa-check"></i></button>
            <button onClick={editTask} className="btn--icons"><i className={edit ? "fa fa-check-circle" : "fa fa-edit"}></i></button>
            <button onClick={deleteTask} className="btn--icons"><i className="fa fa-trash"></i></button>
        </div>
    )
}


export default ToDoIcons;