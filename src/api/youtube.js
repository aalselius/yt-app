import axios from 'axios';

const KEY = 'AIzaSyCj7UbGPVriW0jviyDGWfJ2_FkIDMH60uA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})