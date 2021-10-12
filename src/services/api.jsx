import axios from 'axios';

const API_KEY = '7d4ef5d23648c7c62acd3ccfa1a0a30b';
const URL = 'https://api.openweathermap.org/data/2.5/';


 const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}

export default getWeather;