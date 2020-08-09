import { SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from '../actionTypes'
import axios from 'axios';

import config from '../../config';


export const fetchTrendingVideos = () => async dispatch => {
    try {
        dispatch({ type: SET_VIDEOS, payload: null });
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
        const { data } = await axios(`${config.BASE_URL}/categories`, {
            headers: {
                "Content-Type": "application/json",
                "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199"
            }
        })
        console.log(data);
        dispatch({ type: SET_VIDEOS, payload: data });
    } catch (err) {
        console.error(err);
    }

    finally {
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
    }
};
export const fetchSearchVideos = (searchQuery) => async dispatch => {
    try {
        dispatch({ type: SET_VIDEOS, payload: null });
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
        const { data } = await axios(`${config.BASE_URL}/locations?query=${searchQuery}`, {
            headers: {
                "Content-Type": "application/json",
                "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199"
            }
        });

        console.log(data);
        dispatch({ type: SET_VIDEOS, payload: data });
    } catch (err) {
        console.error(err);
    }
    finally {
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
    }
};


