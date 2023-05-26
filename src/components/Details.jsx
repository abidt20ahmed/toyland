import { Card } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from './NavBar';
import SharedFooter from './SharedFooter';
import { FaStar } from 'react-icons/fa';
import useTitle from '../hooks/useTitle';

const Details = ({ handleClose }) => {
    // useTitle('Toy-Details')
    const toy = useLoaderData();
//     useEffect(() => {
//     window.scrollTo(0, 0);

// }, [])



    const rating = parseFloat(toy?.ratings)
    return (
        <>
            <NavBar />


            <div className=" w-full lg:max-w-[50%] mx-auto my-20" data-aos="zoom-in">
                <Card
                    className=' bg-slate-100 hover:bg-slate-50'
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={toy?.photo}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {toy?.productName}
                    </h5>
                    <p className=' text-xl font-medium py-1 '>Description: {toy?.description}</p>
                    <div className='grid lg:grid-cols-2'>
                        <p className=' text-xl font-medium py-1 '>Brand: {toy?.brand}</p>
                        {toy?.seller && <p className=' text-xl font-medium py-1 '>Seller: {toy?.seller}</p>}
                        {toy?.email && <p className=' text-xl font-medium py-1 text'>Seller mail: {toy?.email}</p>}
                        <p className=' text-xl font-medium py-1 '>Category: {toy?.category}</p>
                        <p className=' text-xl font-medium py-1 '>Price: ${toy?.price}</p>
                        <p className=' text-xl font-medium py-1 flex items-center gap-2'>Ratings:  <FaStar className=' text-amber-500' /> {rating}</p>
                        {toy?.quantity && <p className=' text-xl font-medium py-1 '>Available Quantity: {toy.quantity} pieces</p>}
                    </div>

                </Card>
            </div>





            <SharedFooter />

        </>



    );
};

export default Details;