import { combineReducers } from "redux";
import {
  activeReducer,
  photoReducer,
  videoReducer,
  favouritePhotoReducer,
  favouriteVideoReducer,
  searchPhotoReducer,
  searchVideoReducer,
  searchInputValueReducer,
  photoActivePageReducer,
  videoActivePageReducer,
  searchPhotoActivePageReducer,
  searchVideoActivePageReducer,
  perPageReducer,
} from "./Reducers";

const reducers = combineReducers({
  combinePhoto: photoReducer,
  combineVideo: videoReducer,
  combineActive: activeReducer,
  combineFavouritePhoto: favouritePhotoReducer,
  combineFavouriteVideo: favouriteVideoReducer,
  combineSearchPhoto: searchPhotoReducer,
  combineSearchVideo: searchVideoReducer,
  combineSearchInputValue: searchInputValueReducer,
  combinePhotoActivePage: photoActivePageReducer,
  combineVideoActivePage: videoActivePageReducer,
  combineSearchPhotoActivePage: searchPhotoActivePageReducer,
  combineSearchVideoActivePage: searchVideoActivePageReducer,
  combinePerPage: perPageReducer,
});

export default reducers;
