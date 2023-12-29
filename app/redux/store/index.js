import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../feautures/weatherData.slice";



const store = configureStore({
    reducer:{
        weather: weatherReducer
    }
}) 



export {store}