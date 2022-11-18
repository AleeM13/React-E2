import { useState } from 'react';
import { Todo } from './components/Todo';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1
    if(todos.length > 0) {
      id = todos[0].id + 1
    }

    let todo = {id: id, text: text, completed: false};
    let newTodos = {todo, ...todos};
    setTodos(newTodos);
  };

  return (
    <>
    <Todo addTodo = {addTodo}/>
    {todos.map((todo) => {
      return (
        <TodoItem todo={todo} key={todo.id}/>
      )
    })};
    </>
  );
}

export default App;