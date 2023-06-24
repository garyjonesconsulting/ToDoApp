import React from "react";
import { ITask } from "../App";
import { Container } from "react-bootstrap";
import TaskComponent from "./TaskComponent";

interface IProps {
    tasks: ITask[]
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskListComponent: React.FC<IProps> = ({tasks, setTask}) => {
    
    return (
        <Container>
            {
                tasks.map(task => <TaskComponent setTask={setTask} task={task}/>)
            }
            
        </Container>
    )
}

export default TaskListComponent