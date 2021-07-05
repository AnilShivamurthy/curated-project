import { actionType } from '../Constants/Constants';

export const setPhoto = (photo) => {
    return {
        type: actionType.SET_PHOTO,
        payload: photo
    }
}

export const setVideo = (video) => {
    return {
        type: actionType.SET_VIDEO,
        payload: video
    }
}

export const setActive = (id) => {
    return {
        type: actionType.SET_ACTIVE,
        payload: id
    }
}

export const setFavouritePhoto = (photoArray) => {
    return {
        type: actionType.SET_FAVOURITE_PHOTO,
        payload: photoArray
    }
}

export const setFavouriteVideo = (videoArray) => {
    return {
        type: actionType.SET_FAVOURITE_VIDEO,
        payload: videoArray
    }
}

export const setSearchPhoto = (PhotoArray) => {
    return {
        type: actionType.SET_SEARCH_PHOTO,
        payload: PhotoArray
    }
}

export const setSearchVideo = (VideoArray) => {
    return {
        type: actionType.SET_SEARCH_VIDEO,
        payload: VideoArray
    }
}

export const setSearchInputValue = (inputText) => {
    return {
        type: actionType.SET_SEARCH_INPUT_VALUE,
        payload: inputText
    }
}

export const setPhotoActivePage = (activeNumber) => {
    return {
        type: actionType.SET_PHOTO_ACTIVE_PAGE,
        payload: activeNumber
    }
}

export const setVideoActivePage = (activeNumber) => {
    return {
        type: actionType.SET_VIDEO_ACTIVE_PAGE,
        payload: activeNumber
    }
}

export const setSearchPhotoActivePage = (activeNumber) => {
    return {
        type: actionType.SET_SEARCH_PHOTO_ACTIVE_PAGE,
        payload: activeNumber
    }
}

export const setSearchVideoActivePage = (activeNumber) => {
    return {
        type: actionType.SET_SEARCH_VIDEO_ACTIVE_PAGE,
        payload: activeNumber
    }
}

export const setPerPage = (pageNumber) => {
    return {
        type: actionType.SET_PER_PAGE,
        payload: pageNumber
    }
}