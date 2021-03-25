import React from 'react';
import { Container } from 'semantic-ui-react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TasksColumn from '../taskscolumn';
import { TASKS } from './tasks.constants';
import './index.css';

function TasksContainer(props) {
    return (
        <DndProvider backend={HTML5Backend}>
            <Container style={{ display: 'flex', backgroundColor: 'rgb(0, 121, 191)' }}>
                {
                    ['INPROGRESS', 'TODO', 'DONE'].map(state => <TasksColumn tasks={TASKS} />)
                }
            </Container>
        </DndProvider>
       
    );
}

export default TasksContainer;
