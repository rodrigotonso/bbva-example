import ToDoList from "../TodoList/ToDoList";
import "./App.css";

function App() {
    const data = [
        { id: 1, task: "Wake Up1", finished: true },
        { id: 2, task: "Wake Up2", finished: false },
        { id: 3, task: "Wake Up3", finished: true },
        { id: 4, task: "Wake Up4", finished: false },
        { id: 5, task: "Wake Up5", finished: false }
    ];
    
    const handleCheck = ()=>{
        console.log("hola")
    }

    return (
        <div style={{ margin: "50px" }}>
            <ToDoList data={data} handleCheck={handleCheck}/>
        </div>
    );
}

export default App;
