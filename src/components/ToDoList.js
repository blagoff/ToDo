import React from 'react';
//import style from './TodoList.css';

const TodoList = props =>(
    props.items.map(item =>
    <li key={item.id} onClick = {()=>props.remove(item.id)}>{item.text}</li>
    )
);

 

export default TodoList;