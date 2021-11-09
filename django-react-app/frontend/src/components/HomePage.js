import React from 'react'; 
import Navbar from './Navbar';
import Albums from './Albums';

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Albums />
        </React.Fragment>
    );
}

export default HomePage;