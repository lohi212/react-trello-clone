import React, { useMemo } from 'react';
import { Segment } from 'semantic-ui-react';
import { useDrag } from 'react-dnd'

function Task({ task, column }) {
    const [{isDragging}, drag] = useDrag(useMemo(() => ({
        type: 'TASK',
        item: { task, column },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            // console.log(item);
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
    }), [{...task}]))

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
