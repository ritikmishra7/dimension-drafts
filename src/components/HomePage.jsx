import React from 'react'
import Navbar from './Navbar';
import Herosection from './Herosection';
import Solutions from './Solutions';
import System from './System';
import Tools from './Tools';
import Footer from './Footer';
import './HomePage.css'


function HomePage() {
    return (
        <div className='homePageWrapper'>
            <Navbar />
            <Herosection />
            <Solutions />
            <System />
            <Tools />
            <Footer />
        </div>
    );
}

export default HomePage