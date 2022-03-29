import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-6xl'>Welcome to tailwind with react</h1>
        </div>
    );
};

export default Header;