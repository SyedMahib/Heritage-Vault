import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DynamicTitle from '../Components/DynamicTitle';

const RootLayout = () => {
    return (
        <div className='bg-[#f7f1e2]'>
            <DynamicTitle></DynamicTitle>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;