import React, {useState} from "react";

const InputComponent: React.FC = () => {
    const [newTaskInput, setNewTaskInput] = useState<string>("")

    const addTask = () => {
        const options = {
            method: 'POST',
            body: newTaskInput
        }
        fetch('http://localhost:8080/tasks', options)
    }

    return (
        <div className={"add-task-item"}>
            <span>New Task: </span>
            <input type="text"
                   value={newTaskInput}
                   onChange={event => setNewTaskInput(event.target.value)}
            />
        </div>
    )
}

export default InputComponent