import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Welcome to Jon Smith Codes!</h1>
            <p>This is the homepage of my coding accomplishments.</p>
            <img src="/profile.png" alt="Profile image" />
        </div>
    );
};

export default Home;