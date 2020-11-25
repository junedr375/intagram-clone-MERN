import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://instagram-clone-backed.herokuapp.com/',

});
export default instance;