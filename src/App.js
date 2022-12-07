import { useState } from 'react';
import { Form } from './components/Form';
import { Task } from './components/Task';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(task === '') {
      alert('Ingresa una tarea primero')
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      complete: false
    }

    const temp = [newTask, ...taskList];
    setTaskList(temp);
    setTask('');
  };

  const handleChange = (e) => {
    setTask(e.target.value)
  };

  const onDeleteTask = (id) => {
    const temp = taskList.filter(item => item.id !== id);
    setTaskList(temp);
  }

  const onDeleteAll = () => {
    setTaskList([])
  }

  return (
    <>
      <div className="container">
        <h1>Guarda todas tus tareas</h1>
        <div className="containerForm">
        <Form
        task= {task} 
        handleSubmit= {handleSubmit}
        handleChange= {handleChange} />
        </div>

        <div className='containerTasks'>
            {
              taskList.map(task => (
                <Task
                key={task.id}
                id={task.id}
                task={task} 
                onDeleteTask={onDeleteTask} />
              ))
            }
            <button className='btnDelete'
            onClick={onDeleteAll} >Borrar todo</button>
        </div>
      </div>
    </>
  );
}

export default App;