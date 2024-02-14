import React, { useState } from "react";
import "./MainPage.css";
import AddTask from "../AddTask/AddTask";

const MainPage = () => {
    const [tasks, setTask] = useState([]);
    console.log("task", tasks);
    return (
        <div className="mainpage_container">
            <div className="mainpage_header">
                <h1>Task Manager</h1>
                <AddTask tasks={tasks} setTask={setTask}/>
            </div>
            <div className="mainpage_content">
                <h1>hello</h1>
                <textarea name="" id="" cols="50" rows="0"></textarea>
                <button type='submit'>Save</button>
            </div>
        </div>
    )
};

export default MainPage;