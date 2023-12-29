import React from 'react';
 import logo from '../assets/JohnOliverFitness.png'

const Nav = () => {
    return (
        <nav>
            <img src={logo}  alt='John Oliver Logo'/>

            <h2>Training</h2>
            <h2>About</h2>
        </nav>
    );
};

export default Nav;