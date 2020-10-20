import React from 'react';
import Contact from '../Contact/Contact';
import Feedback from '../FeedBack/Feedback';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Slider from '../Slider/Sliders';





const Home = () => {
    return (
        <div className='header-container'>
            <Header></Header>
            <Service></Service>
            <Slider></Slider>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;