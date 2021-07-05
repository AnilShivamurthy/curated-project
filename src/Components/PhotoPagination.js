import React from 'react';
import './PhotoPagination.css';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoActivePage, setSearchPhotoActivePage } from '../Redux/Action/Action';

const PhotoPagination = () => {
    const photoActivePage = useSelector(state => state.combinePhotoActivePage.photoActivePage);
    const total_photo_results = useSelector(state => state.combinePhoto.photo.total_results);
    const per_page = useSelector(state => state.combinePerPage.perPage);
    const searchPhoto = useSelector(state => state.combineSearchPhoto.searchPhoto.photos);
    const searchPhotoActivePage = useSelector(state => state.combineSearchPhotoActivePage.searchPhotoActivePage);
    const dispatch = useDispatch();

    const handlePageChangePhoto=(number)=>{
        if(searchPhoto !== undefined && searchPhoto.length !== 0){
            dispatch(setSearchPhotoActivePage(number));
        }else{
            dispatch(setPhotoActivePage(number));  
        }
    }
       
    
    return (
        <div>
            { (searchPhoto !== undefined && searchPhoto.length !== 0) ? <Pagination
                                        activePage={searchPhotoActivePage}
                                        itemsCountPerPage={per_page}
                                        totalItemsCount={total_photo_results}
                                        pageRangeDisplayed={9}
                                        onChange={handlePageChangePhoto}/>   :        
                                            
                                        <Pagination
                                        activePage={photoActivePage}
                                        itemsCountPerPage={per_page}
                                        totalItemsCount={total_photo_results}
                                        pageRangeDisplayed={9}
                                        onChange={handlePageChangePhoto}/>}
        </div>
    );
};

export default PhotoPagination;