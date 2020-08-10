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
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />            
            </div>
            {/* 3 links - sign in/sign out, returns, prime account deets */}
            <div className='header__nav'>
            {/* 1st link */}
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Saman</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to='/' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
            </Link>

            {/* 3rd link */}
            <Link to='/' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>

            {/* basket - cart link */}
            
            </div>
        </nav>
    )
}

export default Header
