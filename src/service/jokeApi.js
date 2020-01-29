import axios from 'axios';

const jokeApi = axios.create({ baseURL: 'https://geek-jokes.sameerkumar.website/api' });

export default jokeApi;