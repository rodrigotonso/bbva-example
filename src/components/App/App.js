import { useState } from "react";
import ToDoList from "../TodoList/ToDoList";
import "./App.css";

const defaultTasks = [
    { id: 1, task: "Wake Up1", finished: true },
    { id: 2, task: "Wake Up2", finished: false },
    { id: 3, task: "Wake Up3", finished: true },
    { id: 4, task: "Wake Up4", finished: false },
    { id: 5, task: "Wake Up5", finished: false },
];

function App() {
    const [tasks, setTasks] = useState(defaultTasks);

    const handleCheck = (e) => {
        const newArray = tasks.map((task) => {
            if (String(task["id"]) === String(e.target.id))
                task.finished = e.target.checked;
            return task;
        });
        setTasks(newArray);
    };

    return (
        <div style={{ margin: "50px" }}>
            <ToDoList data={tasks} handleCheck={handleCheck} />
        </div>
    );
}

export default App;
