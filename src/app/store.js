import { configureStore } from "@reduxjs/toolkit";
import { userLocationSlice } from "../features/location/Userlocation";
export const Store = configureStore({
    reducer:{
        location : userLocationSlice
    },
})