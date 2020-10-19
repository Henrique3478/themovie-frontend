import axios from 'axios';

import { BASE_API } from '../../config/const';

export const getMovies = async (params = '', setState) => {

    const { data } = await axios.get(BASE_API + '/movies' + params);
    setState(data.response.content)

}

export const getGenres = async (params = '', setState) => {

    const { data } = await axios.get(BASE_API + '/genres' + params);
    setState(data.response.content)

}