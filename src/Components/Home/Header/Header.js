import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbars from '../Navbar/Navbars';
import Brand from '../Brand/Brand';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbars></Navbars>
            <HeaderMain></HeaderMain>
            <Brand></Brand>
        </div>
    );
};

export default Header;