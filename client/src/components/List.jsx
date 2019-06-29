import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => (
    <div>
        {
            props.todos.map( (todo, index) => {
                return <ListEntry 
                    key={index} 
                    todo={todo} 
                    index={index}
                    deleteData={props.deleteData}
                    updateData={props.updateData}
                    />
            })
        }
    </div>
);


export default List;