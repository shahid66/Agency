import React from 'react';
import brandImg from '../../../images/logos/airbnb.png'
import '../Navbar/Navbars.css'
const Brand = () => {
    return (
        <section className="d-flex justify-content-center angle">
            <div className="w-75 row angle2 align-items-center">
                <div className='col-md'>
                    <img className='img-fluid' src={brandImg} alt='/'/>
                </div>
                <div className='col-md'>
                    <img className='img-fluid' src={brandImg} alt='/'/>
                </div>
                <div className='col-md'>
                    <img className='img-fluid' src={brandImg} alt='/'/>
                </div>
                <div className='col-md'>
                    <img className='img-fluid' src={brandImg} alt='/'/>
                </div>
                <div className='col-md'>
                    <img className='img-fluid' src={brandImg} alt='/'/>
                </div>

            </div>
        </section>
    );
};

export default Brand;