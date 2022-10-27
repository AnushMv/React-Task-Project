import React, {useState} from "react";

function Task({tasks, title, category, status, _id}){

    const [taskslist, setTasksList] = useState([]);
    const addTasks = () =>{
        setTasksList(tasks.map(task => [{title: task.title,
            category: task.category,
            status: task.status,
            _id:task._id}])

        )
    }
    return <div

        key={title}
        className={'task'}>
        <p>{title}</p>
        <p>{category}</p>
        <p>{status}</p>
        <p>{_id}</p>
    </div>

}

export default Task;