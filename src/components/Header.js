import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    const style = { 
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    }

    return (
        <div>
          <div>
            <h3 style={style}><a href='/'>Home</a></h3>
            <h3 style={style}><a href='/jokes'>Jokes</a></h3>
            <h3 style={style}><a href='/jTwo'>JokesTwo</a></h3>
          </div> 
          {children}
        </div>
        
    )
}

export default Header;