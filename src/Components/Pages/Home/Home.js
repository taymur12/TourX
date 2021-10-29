import React from 'react';
import About from './Aboutus/About';
import Blog from './Blog/Blog';
import Landing from './Landing/Landing';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Services></Services>
            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default Home;