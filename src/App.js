import { useEffect } from 'react';
import './App.css';
import Layout from './Components/Layout';
import SearchBar from './Components/SearchBar';
import PhotoLayout from './Components/PhotoLayout';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setFavouritePhoto, setFavouriteVideo, setPhoto, setSearchPhoto, setSearchVideo, setVideo } from './Redux/Action/Action';
import VideoLayout from './Components/VideoLayout';
import Favourite from './Components/Favourite';
import PhotoPagination from './Components/PhotoPagination';
import VideoPagination from './Components/VideoPagination';

function App() {
  const token = "563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692";
  const dispatch = useDispatch();
  const active = useSelector(state => state);
  const favouritePhoto = useSelector(state => state.combineFavouritePhoto.favouritePhoto);
  const favouriteVideo = useSelector((state)=> state.combineFavouriteVideo.favouriteVideo);
  const photoActivePage = useSelector(state => state.combinePhotoActivePage.photoActivePage);
  const videoActivePage = useSelector(state => state.combineVideoActivePage.videoActivePage);
  const searchPhotoActivePage = useSelector(state => state.combineSearchPhotoActivePage.searchPhotoActivePage);
  const searchVideoActivePage = useSelector(state => state.combineSearchVideoActivePage.searchVideoActivePage);
  const searchInputValue = useSelector(state => state.combineSearchInputValue.searchInputValue);

  const per_page = useSelector(state => state.combinePerPage.perPage);

  const fetchPhotoDetails= async () => {
    await axios.get(`https://api.pexels.com/v1/curated?page=${photoActivePage}&per_page=${per_page}`, {headers: { 'Authorization' : `${token}`}})
    .then(response => {
      console.log(response)
      dispatch(setPhoto(response.data));
    }) 
  }

  const fetchVideoDetails = async ()=>{
    await axios.get(`https://api.pexels.com/videos/popular?page=${videoActivePage}&per_page=${per_page  }`,{headers: { 'Authorization' : `${token}`}})
    .then(response => {
      console.log(response)
      dispatch(setVideo(response.data));
    })
  }
  

  useEffect(()=>{
    fetchPhotoDetails();
  }, [photoActivePage])

  useEffect(()=>{
    fetchVideoDetails();
  },[videoActivePage])


 const handlePhotoFavourite =(item)=>{
  if(favouritePhoto.includes(item)) {     
    favouritePhoto.map((favItem, favIndex) =>{
        if(item === favItem){
            favouritePhoto.splice(favIndex, 1);
        }
    });
    console.log(favouritePhoto);
    dispatch(setFavouritePhoto(favouritePhoto));
    }else{  
    dispatch(setFavouritePhoto(favouritePhoto.concat(item)));
    console.log(favouritePhoto.concat(item));
    }
 }

 const handleVideoFavourite =(item)=>{
    if(favouriteVideo.includes(item)) {     
      favouriteVideo.map((favItem, favIndex) =>{
      if(item === favItem){
          favouriteVideo.splice(favIndex, 1);
      }
  });
  dispatch(setFavouriteVideo(favouriteVideo));
  }else{  
  dispatch(setFavouriteVideo(favouriteVideo.concat(item)));
  }
 }

 const handlePhotoSearchResponse = async()=>{
  await axios.get(`https://api.pexels.com/v1/search?query=${searchInputValue}&page=${searchPhotoActivePage}&per_page=${per_page}`, {headers: { Authorization: `${token}`}})
  .then((response) => {
    dispatch(setPhoto(response.data)); 
    dispatch(setSearchPhoto(response.data));
  }); 
}

const handleVideoSearchResponse = async () =>{
  await axios.get(`https://api.pexels.com/videos/search?query=${searchInputValue}&page=${searchVideoActivePage}&per_page=${per_page}`, {headers: { Authorization: `${token}` }})
    .then((response) => {
      dispatch(setVideo(response.data));
      dispatch(setSearchVideo(response.data));
    });
}
  
 

  useEffect(()=>{
    handlePhotoSearchResponse();
  },[searchPhotoActivePage]);

  useEffect(()=>{
    handleVideoSearchResponse();
  },[searchVideoActivePage]);



  
  return (
      <div className="App">
          <SearchBar handlePhotoSearchResponse={handlePhotoSearchResponse} handleVideoSearchResponse={handleVideoSearchResponse}/>
          <Layout />
          {active.combineActive.active === "photo" ? 
          <>
            <PhotoLayout handlePhotoFavourite={handlePhotoFavourite} /> 
            <PhotoPagination /> 
          </>: null}
          {active.combineActive.active  === "video" ? 
          <>
            <VideoLayout handleVideoFavourite={handleVideoFavourite}/> 
            <VideoPagination />
          </> : null}
          {active.combineActive.active  === "favourite" ? <Favourite /> : null}
      </div>
  );
}

export default App;
