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
            <div className='home__row'>
                <Product 
                    id='12321341'
                    title='The Lean Startup: How Constant Innocation Creates Radically Successful Business Paperback'
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />

                <Product 
                    id='34651234'
                    title='Electric Hand Mixer, MOSAIC 3 Speed Handhold Mixer with Turbo, Cord & Attachments Storage'
                    price={21.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61d8dj%2BuV6L._AC_SL1500_.jpg"
                />
            </div>

            <div className='home__row'>
                <Product 
                    id='86709833'
                    title='Simple Modern 20oz Voyager Travel Mug Tumbler w/Clear Flip Lid & Straw'
                    price={19.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71GBKF7qtQL._AC_SL1500_.jpg"
                />

                <Product 
                    id='65437654'
                    title='BLU Studio Mini -5.5HD Smartphone, 32GB+2GB Ram - Black'
                    price={59.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/A1gUduSRYZL._AC_SL1500_.jpg"
                />

                <Product 
                    id='09780678'
                    title='Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker'
                    price={35.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51oAPLRW9DL._AC_SL1000_.jpg"
                />
            </div>

            <div className='home__row'>
                <Product 
                    id='72934749'
                    title='Kindle Paperwhite – Now Waterproof with 2x the Storage – Ad-Supported'
                    price={129.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61KWyBPz99L._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
