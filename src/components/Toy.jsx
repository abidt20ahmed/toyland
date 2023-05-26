import { Button, Card, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Details from './Details';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Toy = ({ toy }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    const { _id, productName, brand, photo, description } = toy || {}
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false)


    const handleClose = () => {
        // Handle the modal close event here
        setShowModal(false);
    };
    return (
        // data-aos="fade-up"
        <div className="max-w-sm h-full" data-aos="zoom-in" data-aos-duration="3000">
            <Card className='text-left h-full relative pb-10' imgSrc={photo}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {productName}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{!show ? description.slice(0, 150) : description}<small className={`my-element ${description.length < 250 && 'hidden'}`}> . . . <button onClick={() => setShow(!show)}>{!show ? 'See more' : 'See less'}</button></small></p>

                <Link className=' absolute bottom-5 right-5' to={`/details/${_id}`}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>View Details</Button></Link>
                {/* onClick={() => setShowModal(true)} */}

            </Card>



            <Modal show={showModal} onClose={handleClose}>



                <Details handleClose={handleClose}></Details>

            </Modal>

        </div>
    );
};

export default Toy;