import axios from 'axios';
import React, { Component } from 'react'; 
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { getAllAlbums } from '../redux/actions/albums';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getAllAlbums()
    };
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    {this.props.albums.length > 0 ? 
                    <ul>{this.props.albums.map((album, index) => (
                        <li key="{album.id}">{album.title}</li>
                    ))}</ul> : 
                    <div></div>}
                </div>
            </React.Fragment>
        )
    };
}

const mapStateToProps = state => {
    return {
        albums: state.albumReducer.albums
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllAlbums: () => {
            dispatch(getAllAlbums())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
