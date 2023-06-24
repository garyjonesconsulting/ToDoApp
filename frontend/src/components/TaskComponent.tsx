import React from "react";
import { ITask } from "../App";
import { Button, Col, Row } from "react-bootstrap";
import { API_BASE_URL } from "../config";

interface IProps {
    task: ITask
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskComponent: React.FC<IProps> = ({task, setTask}) => {
    const markAsDone = () => {
        const updatedTask: ITask = {...task, done: true}
        const options = {
            method: 'PUT',
            body: JSON.stringify(updatedTask)
        }
        fetch(`${API_BASE_URL}/tasks`, options)
            .then(response => response.json())
            .then(updatedTask => 
                setTask(prevState => prevState.map(item => item.id === task.id ? updatedTask : item)))
            .catch(error => {
                console.log(error)
                alert("couldn't update task")
            })
    }
    
    return (
        <Row>
            <Col md={12}>
                <input type="checkbox" checked={task.done}/>
            </Col>
            <Col md={8}>
                <span>{task.content}</span>
            </Col>
            <Col md={2}>
                <Button>
                    X
                </Button>
            </Col>
        </Row>
    )
}

export default TaskComponent