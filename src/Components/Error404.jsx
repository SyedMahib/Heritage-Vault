import Lottie from 'lottie-react';
import React from 'react';
import ErrorLottie from '../assets/Lotties/Error.json'
import Navbar from './Navbar';
import { Link } from 'react-router';

const Error404 = () => {
    return (
         <div className='bg-[#f7f1e2] flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-grow container mx-auto flex items-center justify-center flex-col pt-[40px] pb-[170px]'>
                <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] max-w-full max-h-[70vh]">
                    <Lottie animationData={ErrorLottie} loop={true}></Lottie>
                </div>
                <h2 className='text-center font-bold text-3xl'>Oops! You have landed on a wrong path</h2>
                <Link to="/" className='btn bg-[#A37854] hover:bg-[#8a623e] text-white mt-10'>Go back Home</Link>
            </div>
        </div>
    );
};

export default Error404;