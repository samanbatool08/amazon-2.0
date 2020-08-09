import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <nav className='header'>
            {/* amazon logo on the left (img tag) */}
            <Link to='/'>
                <img 
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='amazon logo' 
                />
            </Link>
            {/* search box  */}
            <input type='text' className='header__searchInput' />
            <SearchIcon className='header__searchIcon' />            
            {/* 3 links - sign in/sign out, returns, prime account deets */}
            {/* basket - cart link */}
        </nav>
    )
}

export default Header
