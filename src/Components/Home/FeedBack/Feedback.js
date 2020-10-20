import React from 'react';
import fakefeedback from '../FakeData/FakeFeedBack';

import FeedbackDetails from '../FeedBackDetails/FeedbackDetails';


const Feedback = () => {
    const serviceData=fakefeedback;
    return (
        <section className="feedback-container mt-5">
            <div className="text-center">
                <h2 style={{color: '#1CC7C1'}}>Client <span style={{color: '#8CBD71'}}>FeedBack</span></h2>
               
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-4 pt-5">
                {
                    serviceData.map(data=><FeedbackDetails services={data}></FeedbackDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Feedback;