import { apiWeather } from "@/app/lib"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const API_KEY = "644f6ce0ca9e401ebb891832211707";

const fetchWeather = createAsyncThunk(
    "fetch/weather",
    async (value, {rejectWithValue})=> {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=samarqand&days=7&aqi=yes&alerts=yes`)
            return response.json()
        } catch (error) {
            return rejectWithValue("Something went wrong")
        } 
    }
)


const initialState = {
    weatherData: null,
    isLoading: false,
    success: false,
    error: null,
    message: null
}



const weatherSlice = createSlice({
    name: "weather",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action)=>{
            state.isLoading = false
            state.success = true
            state.message = "Successfully Loaded"
            state.weatherData = action.payload
        })
        builder.addCase(fetchWeather.rejected, (state, action)=>{
            state.isLoading = false
            state.message = action.payload
            state.error = action.payload
        })
    }
})


export const { initializeWeatherData } = weatherSlice.actions;
export {fetchWeather}
export default weatherSlice.reducer;