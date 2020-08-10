import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img 
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
            alt='' 
            />

            {/* Product, id, title, price, rating, image */}
            <Product 
                id='12321341'
                title='The Lean Startup: How Constant Innocation Creates Radically Successful Business Paperback'
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            />
        </div>
    )
}

export default Home
