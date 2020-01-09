import React from "react";
import {ItoDos} from "../../interfaces/ItoDos";
import {EmptyPreloader} from "../emptyPreloader";

interface TodoListProps {
    list:ItoDos[],
    handleCheck: (id: number) => () => void
    remove: (id: number, e: React.MouseEvent) => void
}

export const ToDoList: React.FunctionComponent<TodoListProps> = ({list, handleCheck, remove}) => {
    if(!list.length) {
        return <EmptyPreloader title='Your todo list is empty'/>
    }
    return (
        <ul className="collection">
            {
                list.map((item) => {
                    return (

                        <li key={item.id} className= {item.checked ? "collection-item doneTask" : "collection-item"}  >
                            <label className='listItem'>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={handleCheck(item.id)}
                            />
                            <span> {item.value} </span>
                            <i className='material-icons red-text' onClick={(e) => remove(item.id, e)}>delete</i>
                            </label>
                        </li>

                    )
                })
            }
        </ul>
    )
}