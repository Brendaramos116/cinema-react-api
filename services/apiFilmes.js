import axios from 'axios'
import React from 'react'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + process.env.API_KEY_TMDB 
    }
}) 

export default apiFilmes