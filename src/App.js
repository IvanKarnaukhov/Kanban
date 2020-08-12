import React, {useState} from 'react';
import {Container, Row} from 'reactstrap'
import Column from "./Column"


function App() {

    const taskList = [
        {id: Math.random(), name: "First", priority: 0, status: "todo"},
        {id: Math.random(), name: "Second", priority: 1, status: "progress"},
        {id: Math.random(), name: "Third", priority: 2, status: "review"},
        {id: Math.random(), name: "Fourth", priority: 2, status: "review"},
    ]
    const statuses = ["todo", 'progress', 'review', 'done']
    const [tasks, setTasks] = useState(taskList)

    const changeTaskStatus = (taskId, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === "right") el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === "left") el.status = statuses[statuses.indexOf(el.status) - 1]
            }
return el
        })
        setTasks(newTasks)
    }

    return (
        <div>

            <Container>
                <Row>
                    <Column changeTaskStatus={changeTaskStatus} title={'todo'} tasks={tasks}/>
                    <Column changeTaskStatus={changeTaskStatus} title={'progress'} tasks={tasks}/>
                    <Column changeTaskStatus={changeTaskStatus} title={'review'} tasks={tasks}/>
                    <Column changeTaskStatus={changeTaskStatus} title={'done'} tasks={tasks}/>

                </Row>

            </Container>


        </div>
    );
}

export default App;
