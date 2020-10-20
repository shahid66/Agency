import React from 'react';
import fakeData from '../FakeData/FakeData';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
const serviceData=fakeData;
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 style={{color: '#1CC7C1'}}>Provide Awsome <span style={{color: '#8CBD71'}}>Service</span></h2>
                
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(data=><ServiceDetails services={data}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Service;