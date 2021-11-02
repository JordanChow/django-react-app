import axios from 'axios';
import React, { Component } from 'react'; 
import Navbar from './Navbar';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dispatch = useDispatch();
        dispatch(getAllAlbums())
    };
    
    render() {
        return (
            <Navbar />
        )
    };
}
