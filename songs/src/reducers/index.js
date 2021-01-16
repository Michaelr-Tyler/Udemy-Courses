import { combineReducers } from 'redux'
 
const songsReducer = () => {
    return [
        {title: 'No Scrubs' , duration: '4:05'},
        {title: 'Macarena' , duration: '2:45'},
        {title: 'All Star' , duration: '3:25'},
        {title: 'I want it that way' , duration: '3:20'},
        {title: 'Free bird' , duration: '10:07'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong :selectedSongReducer
});