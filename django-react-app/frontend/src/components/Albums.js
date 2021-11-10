import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../redux/actions/albums';


export default function Albums() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.albumReducer);
    
    useEffect(() => {
        dispatch(getAllAlbums());
    }, []);
    
    const renderAlbums = () => {
        if (state.loading) {
            return <div>Loading...</div>
        }

        return state.albums.map((el) => {
            return <li key="{el.id}">{el.title}</li>
        })
    }

    return (
        <div>
            {renderAlbums()}
        </div>
    )
}
