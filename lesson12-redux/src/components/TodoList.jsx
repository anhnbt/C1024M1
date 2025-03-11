import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/todoActions';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <input
              onChange={() => dispatch(toggleTodo(todo.id))}
              type="checkbox"
              name="todo"
              id={`todo-${todo.id}`}
              checked={todo.completed}
            />
            {todo.text}
          </div>
        ))
      ) : (
        <p>No data.</p>
      )}
    </>
  );
}
