import React from "react";
import { useSelector } from "react-redux";
import "./VideoLayout.css";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const VideoLayout = ({handleVideoFavourite}) => {
  const video = useSelector((state) => state.combineVideo.video.videos);
  const favouriteVideo = useSelector((state)=> state.combineFavouriteVideo.favouriteVideo);

    const handleFavourite=(item)=>{
      handleVideoFavourite(item);
     }

  return (
    <div className="card">
      {
        video && video.map((item, index) =>{
            return(
                <div className="video-card-item" key={item.id}>
                    <video key={index} width="400" height="225" controls className="video" >
                        <source src={item.video_files.map((fileItem)=>{ return fileItem.link})} type="video/mp4" />
                    </video>
                    
                     <div className="content"> 
                         { favouriteVideo.includes(item) ? <IoIosHeart className="favouriteIcon" onClick={(e)=>handleFavourite(item)}/> : <IoIosHeartEmpty className="favouriteIcon" onClick={(e)=>handleFavourite(item)}/> }
                              Shot By : <a className="photographer" href={item.user.url} target="_blank" rel="noopener noreferrer">{item.user.name}</a>
                    </div>
                </div>
            )
        })

      }
    </div>
  );
};

export default VideoLayout;
