import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className='bg-[#f7f1e2]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;