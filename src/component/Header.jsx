import React from 'react';

import { Link } from 'react-router-dom';

import "../styles/Header.css";

const Header = ({ handleCompleted, handleNotCompleted, handleAll}) => {
    return (
        <header className="header">
            <h1>ToDo List</h1>
            <div className="header-container">
              <button onClick={()=>handleAll()}>All ToDo List</button>
              <button onClick={()=>handleCompleted()}>Completed</button>
              <button onClick={()=>handleNotCompleted()}>Not Completed</button>
            </div>
        </header>
    );
};

export default Header;