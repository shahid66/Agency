import React from 'react';
import frameImg from '../../../images/logos/Frame.png'
import '../Navbar/Navbars.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex m-0 align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Let's Grow Your Brand To The Next Level <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-primary">Hire Us</button>
            </div>
            <div className="col-md-6 p-4">
                <img className='img-fluid' src={frameImg} alt='/'/>
            </div>
        </main>
    );
};

export default HeaderMain;