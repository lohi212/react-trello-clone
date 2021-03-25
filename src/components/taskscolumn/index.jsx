import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

import { useDrop } from 'react-dnd'
import Task from '../taskcard';


function TasksColumn({ tasks }) {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: () => {
            console.log('dropped')
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
      }))

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
                {
                    tasks.map(task => <Task task={task} />)
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
