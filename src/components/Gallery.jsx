import React, { useEffect, useState } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css'

const Gallery = () => {
    const [picture1, setPicture1] = useState('https://i.ibb.co/hKJhsTn/car2.png')
    const [picture2, setPicture2] = useState('https://i.ibb.co/sWpHg51/car5.png')
    // useEffect(() => {
    //     Aos.init();
    // }, [])


    return (

        <div className="grid gap-4 w-full max-w-7xl mx-auto mb-40">

            <div className="grid grid-cols-2 gap-4">
                <div data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src={picture1} alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src={picture2} alt="" />
                </div>
            </div>


            {/* <div>
                <img className="h-auto w-full rounded-lg" src={picture} alt="" />
            </div> */}
            <div className="grid grid-cols-5 gap-4" data-aos="fade-up" data-aos-duration="2000">
                <div onMouseOver={() => setPicture1('https://i.ibb.co/fpGNQCV/car1.png')} data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/fpGNQCV/car1.png" alt="" />
                </div>
                <div onMouseOver={() => setPicture2('https://i.ibb.co/hKJhsTn/car2.png')} data-aos="fade-up" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/hKJhsTn/car2.png" alt="" />
                </div>
                <div onMouseOver={() => setPicture1('https://i.ibb.co/5h4xzrZ/car3.png')} data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/5h4xzrZ/car3.png" alt="" />
                </div>
                <div onMouseOver={() => setPicture2('https://i.ibb.co/L8d2RHk/car4.png')} data-aos="fade-up" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/L8d2RHk/car4.png" alt="" />
                </div>
                <div onMouseOver={() => setPicture1('https://i.ibb.co/sWpHg51/car5.png')} data-aos="fade-up" data-aos-duration="3000">
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/sWpHg51/car5.png" alt="" />
                </div>
            </div>
        </div>





    );
};

export default Gallery;



