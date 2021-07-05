import { actionType } from '../Constants/Constants';

const initialState = {
    photo: "",
    video: "",
    active: "photo",
    favouritePhoto: [],
    favouriteVideo: [],
    searchPhoto: "",
    searchVideo: "",
    searchInputValue: "",
    photoActivePage: 1,
    videoActivePage: 1,
    searchPhotoActivePage: 1,
    searchVideoActivePage: 1,
    perPage: 8,
}


export const photoReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PHOTO:
            return({...state, photo: payload});
    
        default:
            return state;
    }
}

export const videoReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_VIDEO:
            return({...state, video: payload});
    
        default:
            return state;
    }
}

export const activeReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_ACTIVE:
            return({...state, active: payload});
    
        default:
            return state;
    }
}

export const favouritePhotoReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_FAVOURITE_PHOTO:
            return({...state, favouritePhoto: payload});
    
        default:
            return state;
    }
}

export const favouriteVideoReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_FAVOURITE_VIDEO:
            return({...state, favouriteVideo: payload});
    
        default:
            return state;
    }
}

export const searchPhotoReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SEARCH_PHOTO:
            return({...state, searchPhoto: payload});
    
        default:
            return state;
    }
}

export const searchVideoReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SEARCH_VIDEO:
            return({...state, searchVideo: payload});
    
        default:
            return state;
    }
}

export const searchInputValueReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SEARCH_INPUT_VALUE:
            return({...state, searchInputValue: payload});
    
        default:
            return state;
    }
}

export const photoActivePageReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PHOTO_ACTIVE_PAGE:
            return({...state, photoActivePage: payload});
    
        default:
            return state;
    }
}

export const videoActivePageReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_VIDEO_ACTIVE_PAGE:
            return({...state, videoActivePage: payload});
    
        default:
            return state;
    }
}

export const searchPhotoActivePageReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SEARCH_PHOTO_ACTIVE_PAGE:
            return({...state, searchPhotoActivePage: payload});
    
        default:
            return state;
    }
}

export const searchVideoActivePageReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SEARCH_VIDEO_ACTIVE_PAGE:
            return({...state, searchVideoActivePage: payload});
    
        default:
            return state;
    }
}

export const perPageReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PER_PAGE:
            return({...state, perPage: payload});
    
        default:
            return state;
    }
}