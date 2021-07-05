import React from 'react';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchVideoActivePage, setVideoActivePage } from '../Redux/Action/Action';
import './PhotoPagination.css';

const VideoPagination = () => {
    const videoActivePage = useSelector(state => state.combineVideoActivePage.videoActivePage);
    const total_video_results = useSelector(state => state.combineVideo.video.total_results);
    const per_page = useSelector(state => state.combinePerPage.perPage);
    const searchVideo = useSelector(state => state.combineSearchVideo.searchVideo);
    const searchVideoActivePage = useSelector(state => state.combineSearchVideoActivePage.searchVideoActivePage);
    const dispatch = useDispatch();

    const handlePageChangeVideo=(videoNumber)=>{
        if(searchVideo !== undefined && searchVideo.length !== 0){
            dispatch(setSearchVideoActivePage(videoNumber));
        }else{
            dispatch(setVideoActivePage(videoNumber));
        }
        
    }

    return (
        <div>
            { (searchVideo !== undefined && searchVideo.length !== 0) ? <Pagination
                                                                        activePage={searchVideoActivePage}
                                                                        itemsCountPerPage={per_page}
                                                                        totalItemsCount={total_video_results}
                                                                        pageRangeDisplayed={9}
                                                                        onChange={handlePageChangeVideo}/> : 

                                                                        <Pagination
                                                                        activePage={videoActivePage}
                                                                        itemsCountPerPage={per_page}
                                                                        totalItemsCount={total_video_results}
                                                                        pageRangeDisplayed={9}
                                                                        onChange={handlePageChangeVideo}/>
        }
       
        </div>
    );
};

export default VideoPagination;