// fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${inp.value}&days=7&aqi=yes&alerts=yes`)


export const apiWeather = async(value)=>{
    const API_KEY = "644f6ce0ca9e401ebb891832211707";
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=yes&alerts=yes`) 
    return response.json()  
}