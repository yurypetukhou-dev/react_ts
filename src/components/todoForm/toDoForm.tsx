import React from "react";

interface ToDoFormProps {
    setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    addToDo: (e: React.KeyboardEvent) => void
    value: string
}
export const TodoForm:React.FC<ToDoFormProps> = (props) => {
    return ( <div className="row">
        <div className="input-field col s12">
            <input type="text" id="autocomplete-input" className="autocomplete" onChange={props.setInputValue} value={props.value} onKeyPress={props.addToDo}/>
        </div>
    </div> )
}