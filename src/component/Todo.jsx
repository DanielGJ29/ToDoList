import React from 'react';

const Todo = ({title, status, id, handleStatus}) => {
    return (
        <>
        <div className="card">
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="status">
                <button className={status ? 'reset' : 'complete'} onClick={()=>handleStatus(id)}>
                    {status ? "Not completed" : "Complete"}
                </button>
            </div>
        </div>
        </>
    );
};

export default Todo;