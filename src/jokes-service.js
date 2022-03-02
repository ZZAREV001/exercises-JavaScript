// Promise example
import axios from 'axios';

const fetchJoke = async(url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch(error) {
        return error;
    }
}

export {
    fetchJoke
}

fetchJoke("https://api.chucknorris.io/jokes/random");
