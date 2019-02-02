import React from 'react';

const TodoList = props =>{
    props.items.map(item =>
    <li key={item.id} onClick = {()=>props.remove(item.id)}>{item.text}</li>
    )
}

export default TodoList; 