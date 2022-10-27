import React, {useState} from "react";
import Task from "./../task/index"

const tasks = [
    {
        "_id": "635a21932160c6d534f31bf2",
        "title": "SLOFAST",
        "category": "JS",
        "status": "done",
        "description": "Dolor quis sint est dolor laboris ullamco eiusmod adipisicing tempor adipisicing velit mollit. Aliqua quis ipsum et fugiat officia eu eiusmod pariatur. Dolor labore ex proident exercitation esse duis ea nulla ex elit reprehenderit. Culpa consequat irure dolore ipsum deserunt elit in et nisi minim sint laboris.\r\n"
    },
    {
        "_id": "635a21931e38adba0b65e0fb",
        "title": "AQUAZURE",
        "category": "ILLUMITY",
        "status": "todo",
        "description": "Quis id occaecat deserunt pariatur ex ut mollit in ea. Excepteur exercitation amet est occaecat reprehenderit dolore anim eu. Consequat occaecat do sit enim aliqua ullamco laborum nulla aute sint tempor eu pariatur ad. Anim qui sunt aute adipisicing.\r\n"
    },
    {
        "_id": "635a2193d96426a59b38bc65",
        "title": "NETAGY",
        "category": "MOLTONIC",
        "status": "done",
        "description": "Fugiat cupidatat labore cillum consectetur magna consectetur esse commodo officia qui enim consectetur ut aliqua. Pariatur proident nisi aliquip reprehenderit ad sint sunt irure. Labore cupidatat labore cillum cupidatat officia eiusmod excepteur ipsum. Sit proident id sit duis. Deserunt tempor est proident fugiat minim proident in reprehenderit mollit. Dolore ut sint do laborum ad duis ad id nostrud aliquip aliquip. Nisi eu excepteur nisi minim tempor cupidatat voluptate aliquip qui eiusmod proident nostrud commodo.\r\n"
    },
    {
        "_id": "635a21934459f75a9c1d2534",
        "title": "GENMY",
        "category": "MITROC",
        "status": "blocked",
        "description": "Et minim dolor tempor ea. Deserunt do irure occaecat veniam nostrud sit laborum pariatur amet pariatur. Commodo cupidatat veniam amet ex dolore et ipsum fugiat dolor aliquip. In reprehenderit minim nulla laboris consequat eiusmod ullamco veniam sunt cupidatat. Fugiat deserunt amet nulla duis ullamco voluptate sint laborum proident non eiusmod excepteur duis minim. Dolor nostrud eiusmod elit voluptate. Excepteur eu cupidatat tempor esse commodo et ipsum.\r\n"
    },
    {
        "_id": "635a219396a1e48811b95988",
        "title": "INDEXIA",
        "category": "SLAMBDA",
        "status": "todo",
        "description": "Eu sunt culpa dolor consectetur. Ipsum fugiat nulla in adipisicing voluptate mollit amet est officia culpa. Est sunt et laboris aliqua sunt sit culpa esse deserunt exercitation enim mollit deserunt consectetur. Culpa labore voluptate proident esse aliqua culpa cillum officia qui cillum.\r\n"
    },
    {
        "_id": "635a2193cb5228e61b209ef1",
        "title": "TALENDULA",
        "category": "COREPAN",
        "status": "blocked",
        "description": "Dolore sit esse cillum commodo. Ad pariatur commodo et consectetur sint ipsum qui sunt amet. Do esse minim eiusmod laborum excepteur exercitation anim ullamco esse incididunt cupidatat. Sit eiusmod voluptate labore duis cupidatat dolor nulla mollit Lorem fugiat voluptate consequat. Consectetur reprehenderit cupidatat nulla reprehenderit sint consequat laborum dolor. Aliquip labore esse elit ad laboris elit qui commodo consectetur excepteur veniam est in in.\r\n"
    },
    {
        "_id": "635a21931c2d4fd8eb52c73c",
        "title": "XELEGYL",
        "category": "PHORMULA",
        "status": "done",
        "description": "Incididunt labore excepteur ad mollit laborum est esse proident amet. Pariatur amet excepteur commodo in est elit pariatur qui ut pariatur incididunt minim nostrud. Et sit irure dolore adipisicing ad incididunt consequat sint reprehenderit sunt commodo esse aliqua.\r\n"
    }
];
function Column({status, _id, addTasks}){


    const [isEditMod, setIsEditMod] = useState(false);
    const [editedTask, setEditedTask] = useState(status);

    console.log(editedTask, 'editedtask')



    const completeTask = (e) => {
        setEditedTask(editedTask);
        resetTask(e);

    }
    const resetTask = (e) => {
        e.stopPropagation();
        setEditedTask(editedTask);
        setIsEditMod(false);
    }
    console.log(isEditMod);
    const handleEdit = () => {
        setIsEditMod(true)
        console.log(isEditMod);
    }



    return (<div className={"wrapper"}>
            <div className={'blocked'}>
                <div className={"title"}>BLOCKED</div>
                {tasks.filter(task => task.status === 'blocked')
                    .map(task => <div key={task.title}>
                        <div>
                            <Task
                            title = {task.title}
                            category = {task.category}
                            status = {task.status}
                            />
                            {
                                isEditMod ? <>
                                    <input type = 'text' className={'statusOfTask'}
                                           value = {task.status}
                                           onChange = {(e) => setEditedTask(e.target.value)}/>
                                    <div>
                                        <button className={'completeEdit'} onClick ={completeTask}>V</button>
                                        <button className={'canselEdit'} onClick ={resetTask}>X</button>
                                    </div>


                                </> : <>
                                    <button className={'edit'} onClick={handleEdit} > Edit </button>
                                </>
                            }
                        </div>
                    </div>)}
            </div>

            <div   className={'inprogress'}>
                <div className={"title"}>IN-PROGRESS</div>
                {tasks.filter(task => task.status === 'inprogress')
                    .map(task => <div key={task.title}>
                        <div>
                            <Task
                                title = {task.title}
                                category = {task.category}
                                status = {task.status}

                            />
                            <button className={'edit'}>Edit</button>
                        </div>
                </div>)}
            </div>
            <div  className={'done'}>
                <div className={"title"}>DONE</div>
                {tasks.filter(task => task.status === 'done')
                    .map(task => <div key={task.title}>
                        <div>
                            <Task
                                title = {task.title}
                                category = {task.category}
                                status = {task.status}

                            />
                            <button className={'edit'}>Edit</button>
                        </div>
                </div>)}
            </div>
            <div   className={'todo'}>
                <div className={"title"}>TODO</div>
                {tasks.filter(task => task.status === 'todo')
                    .map(task => <div key={task.title}>
                        <div>
                            <Task
                                title = {task.title}
                                category = {task.category}
                                status = {task.status}

                            />
                            <button className={'edit'}>Edit</button>
                        </div>
                </div>)}
            </div>
    </div>

    )
}

export default Column;