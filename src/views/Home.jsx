import React, {useState, useEffect} from 'react';

import Header from '../component/Header';
// import Loader from '../component/Loader';
import Todo from '../component/Todo';


import "../styles/todo.css";

const Home = () => {

    const [todoList, setTodoList]= useState([]);
    const [todoListAll, setTodoListAll]= useState(true);
    const [todoListCompleted, setTodoListCompleted]= useState(false);
    
        //FUNCIONES
        const handleStatus = (id, status) =>{
            setTodoList(
                todoList.map(todo =>
                    todo.id === id ? {...todo, completed: !todo.completed} : todo
                )
            );
         };
     
         const handleCompleted = ()=>{
            setTodoListCompleted(true) 
            setTodoListAll(false);
         }
     
         const handleNotCompleted = () =>{
            setTodoListCompleted(false);
            setTodoListAll(false);
         }
         const handleAll =()=>{
            setTodoListAll(true);
            setTodoListCompleted(false);
         }

    useEffect(()=>{
        const handleTodoList = async()=>{
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        const all = result.slice(0,20);
        setTodoList(all);
        }
        handleTodoList();
    },[]);

    return (
        <div>
            <Header handleCompleted={handleCompleted} handleNotCompleted={handleNotCompleted} handleAll={handleAll}/>
            <div className="card-container">

            {todoListAll ? (
                todoList.map( single =>               
                <Todo
                key={single.id} 
                title={single.title} 
                status={single.completed} 
                handleStatus={handleStatus}
                id={single.id} 
                /> 
                
                )
            ) : 
                todoListCompleted ? (
                    todoList.map( single =>  !single.completed  ?           
                    <Todo
                    key={single.id} 
                    title={single.title} 
                    status={single.completed} 
                    handleStatus={handleStatus}
                    id={single.id} 
                    /> : (<>{[]}</>)
                    )
                ) : (
                        todoList.map( single =>  single.completed ?          
                        <Todo
                        key={single.id} 
                        title={single.title} 
                        status={single.completed} 
                        handleStatus={handleStatus}
                        id={single.id} 
                        /> : (<>{[]}</>)
                        ) 
                    )
                }
            
            </div>
        </div>
    );
};

export default Home;