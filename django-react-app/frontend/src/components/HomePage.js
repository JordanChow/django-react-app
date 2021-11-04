import axios from 'axios';
import React, { Component, useEffect } from 'react'; 
import Navbar from './Navbar';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../redux/actions/albums';


const HomePage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.albumReducer);
    
    useEffect(() => {
        dispatch(getAllAlbums());
    }, []);
    
    const renderAlbums = () => {
        if (state.loading) {
            return <div></div>
        }

        return state.albums.map((el) => {
            return <li key="{el.id}">{el.title}</li>
        })
    }

    return (
        <React.Fragment>
            <Navbar />
            <div>
                {renderAlbums()}
            </div>
        </React.Fragment>
    );
}

export default HomePage;
