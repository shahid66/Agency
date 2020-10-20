import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Navbar/Navbars.css'
import fakeData from '../FakeData/FakeData';


const Sliders = () => {
  const sliderData=fakeData;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    adaptiveHeight:true,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    return (
        <section className="works-container mt-5 pt-4 pb-5" style={{background:'#111430'}}>
            <div className="mt-4 mb-4 text-center">
                <h2 style={{ color: '#10AE05' }} >Here Are Some Of <span style={{ color: '#FFFFFF' }} >Our Work</span></h2>
                {/* <h2>Services We Provide</h2> */}
            </div>
            
                <div className="offset-md-1 mt-4 ">
                <Slider {...settings}>
                {
                  sliderData.map(dt=>
                    <div className='Card'>
                    <img className='card-img-top p-4'  src={dt.img}/>
                  </div>
                  )
                }

        </Slider>
                </div>
           
            
</section>
    );
};

export default Sliders;


