import React from 'react';
import '../Navbar/Navbars.css'

const FeedbackDetails = (props) => {
    const{name,position,details,img}=props.services;
    return (
        <div className="col-md-4  p-3 ">

            <div className='feedback-details  p-4'>
                <div className='d-flex'>
                    <img style={{width:'60px'}} src={img} alt="icon"/>
                    <div>
                    <h3 className="mt-3 mb-3 pl-4">{name}</h3>
                    <h5 className='mt-3 mb-3 pl-4'>{position}</h5>
                    </div>
                </div>
                <p className="text-secondary pt-4">{details}</p>
            </div>   

        </div>
    );
};

export default FeedbackDetails;