import React, { useMemo } from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

import { useDrop } from 'react-dnd'
import Task from '../taskcard';


function TasksColumn({ tasks, column, onDragEng }) {
    const [{ canDrop, isOver }, drop] = useDrop(useMemo(() => ({
        accept: 'TASK',
        drop: (item) => {
           console.log(item, column);
           onDragEng(item, column);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
      }), [[...tasks]]))

    return (
        <div ref={drop}>
            <Segment 
                style={{ 
                    width: 300, 
                    height: 'auto', 
                    margin: 0, 
                    marginLeft: 20,
                    marginTop: 20,
                    backgroundColor: '#ebecf0'
                }}
                raised
            >
                <h4>{column}</h4>
                {
                    tasks.map(task => <Task task={task} column={column} />)
                }
                <Button icon labelPosition='left'>
                    <Icon name='plus' style={{ backgroundColor: 'transparent' }} />
                    Add a New Task
                </Button>
            </Segment>
        </div>
        
    );
}

export default TasksColumn;
