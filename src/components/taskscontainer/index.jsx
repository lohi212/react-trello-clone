import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

import TasksColumn from '../taskscolumn';
import { TASKS } from './tasks.constants';
import './index.css';

function TasksContainer(props) {

    const [tasks, setTasks] = useState(TASKS);

    function handleDragEnd(item, key) {
        const newTasks = JSON.parse(JSON.stringify(tasks));
        const filteredTasks = [];
        tasks[item.column].forEach(task => {
            if (task.id !== item.task.id) {
                filteredTasks.push(task);
            }
        });

        newTasks[item.column] = JSON.parse(JSON.stringify(filteredTasks));
        newTasks[key] = [item.task, ...newTasks[key]];
        setTasks(newTasks);
    }

    return (
            <Container style={{ display: 'flex', backgroundColor: 'rgb(0, 121, 191)' }}>
                {
                    Object.keys(tasks).map(task => (
                        <TasksColumn 
                            tasks={tasks[task]} 
                            column={task}
                            onDragEng={handleDragEnd}
                        />
                    ))
                }
            </Container>
    );
}

export default TasksContainer;
