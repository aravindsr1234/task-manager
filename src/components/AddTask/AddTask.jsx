import { useState } from "react";
import './AddTask.css';

const AddTask = (tasks, setTask) => {
    const [addTaskModal, setAddTask] = useState(false);
    const [data, setData] = useState([]);
    console.log("data", data);
    const [taskData, setTaskData] = useState([{
        title: "",
        task: "",
    }]);
    console.log("taskData", taskData);

    const handleChange = (e) => {
        const value = e.target.value;
        const input = e.target.name;
        setTaskData({ ...taskData, [input]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...tasks, taskData]);
    }

    return (
        <>
            <button onClick={() => setAddTask(true)}>Add Task</button>

            {addTaskModal ?
                <div className="add_task_modal">
                    <div className="add_task_modal_header">
                        <h1>Add New Block</h1>
                        <button onClick={() => setAddTask(false)}>X</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Add Task Title" name="title" onChange={handleChange} />
                        <select name="task" id="" onChange={handleChange}>
                            <option name="task" value="single">Single Task</option>
                            <option name="task" value="group">Group Task</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                : ""}
            {data.map((data, index) => (
                <>
                    <h1>{data.title}</h1>
                </>
            ))}
        </>
    )
};

export default AddTask;