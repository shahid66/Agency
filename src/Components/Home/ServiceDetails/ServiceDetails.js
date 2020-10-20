import React from 'react';

const ServiceDetails = (props) => {
    const{name,icon,details}=props.services;
    
    return (
        <div className="col-md-4 text-center p-2 ">

            <div className='works p-4'>
                <img style={{width:'60px'}} src={icon} alt="icon"/>
                <h5 className="mt-3 mb-3">{name}</h5>
                <p className="text-secondary">{details}</p>
            </div>   

        </div>
    );
};

export default ServiceDetails;