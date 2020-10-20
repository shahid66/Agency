import React from 'react';
import '../User/User.css'
import logo from '../../../images/logos/logo.png'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column   py-5 px-4" style={{ height: "100vh" }}>
            <img src={logo}alt="Logo" style={{width:"120px"}}/>
                <ul className="list-unstyled mt-4">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Home</a>
                    </li>
                </ul>
        </div>
    );
};

export default Sidebar;