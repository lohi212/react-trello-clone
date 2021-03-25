import React from 'react';
import { Segment } from 'semantic-ui-react';
import { useDrag } from 'react-dnd'

function Task({ task }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'TASK',
        item: task,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            console.log(item);
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <div ref={drag}>
            <Segment
                style={{ 
                    width: '90%', 
                    margin: 10,
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move',
                }}
            >
                <h4>{task.title} </h4>
            </Segment>
        </div>
        
    );
}

export default Task;
