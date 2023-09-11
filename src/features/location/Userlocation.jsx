import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLocation: {
        lat: null,
        lng: null,
        loading: false,
        error: null,
    },
    destinationLocation: {
        lat: null,
        lng: null,
    },
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        getUserLocationStart: (state) => {
            state.userLocation.loading = true;
            state.userLocation.error = null;
        },
        getUserLocationSuccess: (state, action) => {
            state.userLocation.loading = false;
            state.userLocation.lat = action.payload.lat;
            state.userLocation.lng = action.payload.lng;
        },
        getUserLocationError: (state, action) => {
            state.userLocation.loading = false;
            state.userLocation.error = action.payload;
        },
        setDestinationLocation: (state, action) => {
            state.destinationLocation.lat = action.payload.lat;
            state.destinationLocation.lng = action.payload.lng;
        },
    },
});

export const {
    getUserLocationStart,
    getUserLocationSuccess,
    getUserLocationError,
    setDestinationLocation,
} = locationSlice.actions;

export default locationSlice.reducer;