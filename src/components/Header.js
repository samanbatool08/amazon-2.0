import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <nav className='header'>
            {/* amazon logo on the left (img tag) */}
            <img 
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon logo' 
            />
            {/* search box  */}
            {/* 3 links - sign in/sign out, returns, prime account deets */}
            {/* basket - cart link */}
        </nav>
    )
}

export default Header
