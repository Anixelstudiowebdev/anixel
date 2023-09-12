import { configureStore } from "@reduxjs/toolkit";
import Userlocation from "../features/location/Userlocation";


export const Store = configureStore({
    reducer:{
        location : Userlocation
    },
})