import React from 'react';
import './Hello.css'

const Hello = (props) =>{
        return(
            <div className='f1 tc'>
                <h1>Hello world</h1>
                <p>Welcome to react</p>
                <p>{props.greeting}</p>
            </div>
        );
    
}

export default Hello