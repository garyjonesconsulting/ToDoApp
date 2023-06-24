import React, {useEffect, useState} from 'react';
import './App.css';
import InputComponent from "./components/InputComponent";
// import TaskListComponent from "./components/TaskListComponent";
import {API_BASE_URL} from "./config";
import {Container} from "react-bootstrap";
import TaskListComponent from './components/TaskListComponent';

export interface ITask {
    id: number
    content: string
    done: boolean
}

const App: React.FC = () => {
  const [tasks, setTask] = useState<ITask[]>([]);

  useEffect( () => {
     

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        </header>
        <main>
            <InputComponent setTask={setTask}/>
            <TaskListComponent setTask={setTask} tasks={tasks}/>
        </main>
    </div>
  );
}

export default App;
