import React, {ChangeEvent, useEffect, useState} from "react";
import {TodoForm} from "./toDoForm";
import {ToDoList} from './todoList'
import {ItoDos} from "../../interfaces/ItoDos";

export default () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [toDoList, setToDoList] = useState<ItoDos[]>([])
    useEffect(() => {

        if (localStorage.getItem('todos')) {
            setToDoList(JSON.parse(localStorage.getItem('todos') || '[]'))
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDoList))
    }, [toDoList])

    const addToDo = (e: React.KeyboardEvent) => {

        if (e.key === 'Enter' && inputValue.length) {

            const toDoItem: ItoDos = {
                id: Date.now(),
                value: inputValue,
                checked: false
            }
            setToDoList(prevState => [toDoItem, ...prevState])
            setInputValue("")
        }
    }

    const handleCheck = (id: number) => () => {
        const newArr = toDoList.map(todo => {
            if (todo.id === id) {
                todo.checked = !todo.checked
            }
            return todo
        })
        setToDoList(newArr)
    }

    const handleRemove = (id: number, e: React.MouseEvent) => {
        e.preventDefault()
        const shouldDelete = window.confirm('Do you want delete ?')
        if (shouldDelete) {
            setToDoList(toDoList.filter(item => item.id !== id))
        }
    }
    return (
        <>
            <TodoForm
                value={inputValue}
                setInputValue={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value.trim())}
                addToDo={addToDo}
            />
            <ToDoList list={toDoList} handleCheck={handleCheck} remove={handleRemove}/>
        </>
    )

}