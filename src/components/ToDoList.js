import React from 'react';
import ToDoIcons from './ToDoIcons';


const ToDoList = ({todoItems, setTodoItems, edit, setEdit, itemsSelect, filteredTasks}) => {

    return (
        <div>
            <h2 className="main--title all--title">{itemsSelect} tasks</h2>
            <ul className="todo--list">
                {filteredTasks.sort((a, b) => b.priority - a.priority).map((item, id) => {
                    return <li key={id} className={!item.completed ? "todo--item" : "todo--item done"}>
                        <span contentEditable={edit} className={edit ? "todo--title edit" : "todo--title"}>{item.title}</span>
                        <span contentEditable={edit} className={edit ? "todo--priority edit" : "todo--priority"}>{item.priority}</span>
                        <ToDoIcons 
                            item={item}
                            todoItems={todoItems}
                            setTodoItems={setTodoItems}
                            edit={edit}
                            setEdit={setEdit}
                        />
                    </li>
                })}
            </ul>
        </div>
    )
}


export default ToDoList;