import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col text-secondary h-screen items-center justify-center bg-errorPage bg-no-repeat bg-center bg-cover'>
            <h2 className='text-5xl font-bold'>404</h2>
            <p className='text-xl font-bold'>Page not found</p>
        </div>
    );
};

export default ErrorPage;