import React from 'react';
import { Nav } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

import '../User/User.css'

const User = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }
    return (
        <section>
            <div className='row wraper'>
            <div className='col-md-2 p-0'>
                <Sidebar></Sidebar>
            </div>

            <div className='col-md-10 p-0 d-flex flex-column'>
                <div className=" d-flex  ">
                <ul className="list-unstyled d-flex justify-content-between text-white align-items-center pl-4 pr-4 " style={{width:'100%',background:'black',height:'100px'}}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Home</a>
                    </li>
                </ul>
                </div>
                <div className='bg-primary'>
                    <h2>Hello</h2>
                </div>
            </div>
            </div>
        </section>
    );
};

export default User;