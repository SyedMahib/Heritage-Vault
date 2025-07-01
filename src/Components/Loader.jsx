import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
            <h2>Loading Artifacts...</h2>
        </div>
    );
};

export default Loader;