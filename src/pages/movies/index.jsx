import React, { useEffect, useState, useCallback } from 'react';

import Slider from '../../components/slider';

import { Carousel } from 'react-responsive-carousel';

// import axios from 'axios';

// import { BASE_API } from '../../config/const';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './style.css';

const movies = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/1vM9jPpc8cs/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/1vM9jPpc8cs/maxresdefault.jpg',
      title: '1983'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/originals/64/a7/34/64a734284e4dd4c112f48268f30782a9.jpg',
      imageBg: 'https://i.pinimg.com/originals/64/a7/34/64a734284e4dd4c112f48268f30782a9.jpg',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: 'https://1.bp.blogspot.com/-S1hnO5L4ncQ/W9-K4G1jkBI/AAAAAAAAWqU/41FQsTCVlq0XJ60yHhzzYBW_OJ1xLsZfQCK4BGAYYCw/s1600/venom-bilheteria-outubro.jpg',
      imageBg: 'https://1.bp.blogspot.com/-S1hnO5L4ncQ/W9-K4G1jkBI/AAAAAAAAWqU/41FQsTCVlq0XJ60yHhzzYBW_OJ1xLsZfQCK4BGAYYCw/s1600/venom-bilheteria-outubro.jpg',
      title: 'The rain',
    },
    {
      id: 4,
      image: 'https://i0.wp.com/centralpandora.com.br/wp-content/uploads/2019/11/lancamentos-ficcao-cientifica-2020.jpg?fit=999%2C562',
      imageBg: 'https://i0.wp.com/centralpandora.com.br/wp-content/uploads/2019/11/lancamentos-ficcao-cientifica-2020.jpg?fit=999%2C562',
      title: 'Sex education'
    },
    {
      id: 5,
      image: 'https://s2.glbimg.com/JMAz975yjKhgGsyGYffOxTaVZzc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/7/Q/HDzJ6uSvieWBI723DeNQ/the-witcher.jpg',
      imageBg: 'https://s2.glbimg.com/JMAz975yjKhgGsyGYffOxTaVZzc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/7/Q/HDzJ6uSvieWBI723DeNQ/the-witcher.jpg',
      title: 'Elite'
    },
    {
      id: 6,
      image: 'https://trilhadomedo.com/wp-content/uploads/2019/11/capa-lan%C3%A7amentos-2020.jpg',
      imageBg: 'https://trilhadomedo.com/wp-content/uploads/2019/11/capa-lan%C3%A7amentos-2020.jpg',
      title: 'Black mirror'
    }
];    

const moviesRelease = [
    {
        id: 1,
        image: 'https://i.pinimg.com/originals/86/c0/8e/86c08ed4610de49a5742cb3ba7d43fdd.jpg',
    },
    {
        id: 2,
        image: 'https://vaeveja.files.wordpress.com/2018/02/vurdalaki.jpg',
    },
    {
        id: 3,
        image: 'https://podcastloschicos.com.br/wp-content/uploads/2016/05/29maio4junho1.jpg',
    },
]

function Index(){
    
    // const [ movies, setMovies ] = useState([])

    // const getMovies = useCallback(async () => {
    //     const response = await axios.get(BASE_API + '/movies');
    //     if(response.data.response.content.length > 0){
    //         const movieResponse = response.data.response.content.map(row => 
    //             ({id: row.id, image: row.backdrop_path, imageBg: row.backdrop_path, title: row.original_title}
    //         ))
    //         setMovies(movieResponse)
    //     }
    // },[])

    // useEffect(() => {
    //     getMovies()
    // },[getMovies])

    return(
        <>
            <div className={`container-fluid container-custom`}>
                <div className="carousel-custom">
                    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
                        {moviesRelease.map(row => (
                            <div key={row.id}>
                                <img className={`img-custom`} alt={``} src={row.image} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className={`row justify-content-center`}> 
                    <div className={`col-md-11`}>
                        <h3 className={`text-white`}>Filmes populares</h3>
                    </div>
                    <div className={`col-md-11`}>
                        <Slider>
                            {movies.map(movie => (
                                <Slider.Item movie={movie} key={movie.id}></Slider.Item>
                                ))}
                        </Slider>
                    </div>
                </div>
                <br/>
                <div className={`row justify-content-center`}> 
                    <div className={`col-md-11`}>
                        <h3 className={`text-white`}>Drama</h3>
                    </div>
                    <div className={`col-md-11`}>
                        <Slider>
                            {movies.map(movie => (
                                <Slider.Item movie={movie} key={movie.id}></Slider.Item>
                                ))}
                        </Slider>
                    </div>
                </div>
                <br/>
                <div className={`row justify-content-center`}> 
                    <div className={`col-md-11`}>
                        <h3 className={`text-white`}>Ação</h3>
                    </div>
                    <div className={`col-md-11`}>
                        <Slider>
                            {movies.map(movie => (
                                <Slider.Item movie={movie} key={movie.id}></Slider.Item>
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;