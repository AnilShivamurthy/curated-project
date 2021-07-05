import React from 'react';
import { useSelector } from 'react-redux';
import './PhotoLayout.css'
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const PhotoLayout = ({handlePhotoFavourite}) => {
    const photo = useSelector(state => state.combinePhoto.photo.photos)
    const favouritePhoto = useSelector(state => state.combineFavouritePhoto.favouritePhoto);

    const handleFavourite=(item)=>{
       handlePhotoFavourite(item);
    }

    return (
        <div className="card">
        { 
            photo && photo.map((item, index) =>{
                return(
                    <div className="card-item" key={item.id}>
                        
                        <a href={item.url} target="_blank" rel="noopener noreferrer"><img className="photo" src={item.src.medium} alt={item.photographer}/></a>
                        
                        <div className="content"> 
                            { favouritePhoto.includes(item) ? <IoIosHeart className="favouriteIcon" onClick={(e)=>handleFavourite(item)}/> : <IoIosHeartEmpty className="favouriteIcon" onClick={(e)=>handleFavourite(item)}/> }
                                Clicked By : <a className="photographer" href={item.photographer_url} target="_blank" rel="noopener noreferrer">{item.photographer}</a>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default PhotoLayout;