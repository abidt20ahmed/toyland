import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div
            className='flex items-center justify-center h-screen'
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1684417691~exp=1684418291~hmac=08ab528204cbb2543cb851cecbf8498e98f4b3e17e913af5b5825e8db238b649')`,
                backgroundPosition: 'center',
                objectFit: 'cover',
                minHeight: '100vh',
                width: '100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Link className=' absolute bottom-28' to={'/'}><Button className=' drop-shadow-xl hover:bg-yellow-600 text-black bg-yellow-300'>Back To Home</Button></Link>
        </div>
    );
};

export default Error;