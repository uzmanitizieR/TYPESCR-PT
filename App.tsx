import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<{ task: string; deadline: number }[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === "task") {
      setTask(value);
    } else if (name === "deadline") {
      setDeadline(Number(value));
    }
  };

  const addTask = (): void => {
    if (task && deadline > 0) {
      setTodoList([...todoList, { task, deadline }]);
      setTask("");
      setDeadline(0);
    }
  };

  const deleteTask = (index: number): void => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          name="task"
          placeholder="Task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          name="deadline"
          placeholder="Deadline"
          value={deadline}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((todo, index) => (
          <div key={index} className="todo">
            <span>{todo.task} - {todo.deadline} days</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
