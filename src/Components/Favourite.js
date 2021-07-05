import React from "react";
import { useSelector } from "react-redux";
import "./Favourite.css";

const Favourite = () => {
  const favouritePhoto = useSelector((state) => state.combineFavouritePhoto.favouritePhoto);
  const favouriteVideo = useSelector((state) => state.combineFavouriteVideo.favouriteVideo);
  
  return (
    <div className="card">
      {favouritePhoto.map((favItems, favIndex) => {
        return (
          <div className="card-item" key={favItems.id}>
            <a href={favItems.url} target="_blank" rel="noopener noreferrer">
              <img
                className="photo"
                src={favItems.src.medium}
                alt={favItems.photographer}
              />
            </a>

            <div className="content">
              Clicked By :{" "}
              <a
                className="photographer"
                href={favItems.photographer_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {favItems.photographer}
              </a>
            </div>
          </div>
        );
      })}

      {favouriteVideo.map((favItems, favIndex) => {
        return (
          <div className="favouritevideo-card-item" key={favItems.id}>
            <video
              key={favIndex}
              width="400"
              height="225"
              controls
              className="video"
            >
              <source
                src={favItems.video_files.map((fileItem) => {
                  return fileItem.link;
                })}
                type="video/mp4"
              />
            </video>

            <div className="content">
              VideoShot By :{" "}
              <a
                className="photographer"
                href={favItems.user.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {favItems.user.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
