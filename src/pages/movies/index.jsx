import React, { useEffect, useState } from 'react';

import Slider from '../../components/slider';

import { Form, Field } from 'react-final-form';

import InputSearch from '../../components/form/inputSearch';

import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import { getMovies, getGenres, getTrendings } from './actions';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import moment from 'moment';

import './style.css';

const styleSearch = {
    background: 'rgba(0,0,0,0.1)',
    border: '1px solid #fff',
    color: '#fff'
}

function Index(){

    const [ movies, setMovies ] = useState([])
    const [ genres, setGenres ] = useState([])
    const [ trendings, setTrendings ] = useState([])
    
    useEffect(() => {
        getMovies('', setMovies)
        getGenres('', setGenres)
        getTrendings('', setTrendings)
    },[])

    let moviesRelease = [];

    if(trendings.length > 0){
        moviesRelease = trendings.map(row => ({id: row.id, image: row.backdrop_path}))
    }

    let moviesList = [];

    if(movies.length > 0 && genres.length > 0){
        genres.map(val => {

            const result = movies.filter(row => row.genres.id == val.id)

            const resultCustom = result.map(row => ({
                id: row.id,
                image: row.backdrop_path,
                imageBg: row.backdrop_path,
                title: row.original_title,
                description: row.overview,
                runtime: moment(row.runtime).format('H:mm:ss')
            }))

            if(result.length > 0){
                moviesList.push({genre: val.name, movies: resultCustom})
            }

        })        
    }

    const onSubmit = values => {
        if(values.pesquisar){
            getMovies('?like=original_title,' + values.pesquisar, setMovies)
        }else{
            getMovies('', setMovies)
        }
    }

    return(
        <>
            <nav className={`navbar navbar-custom navbar-expand navbar-dark`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={`/`} className={`nav-link`}>Filmes</Link>
                    </li>
                </ul>
                <ul className={`navbar-nav ml-auto`}>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit} className="form-inline ml-3">
                            <Field
                                component={InputSearch}
                                name={`pesquisar`}
                                type={`search`}
                                className={`form-control form-control-navbar`}
                                style={styleSearch}
                                placeholder={`Digite o nome do filme`}
                            />
                            </form>
                        )}
                        />
                </ul>
            </nav>
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
                {moviesList.length > 0 ? 
                    <>
                        <div className={`row justify-content-center`}> 
                            <div className={`col-md-11 text-center`}>
                                <h3 className={`text-white`}>Filmes populares</h3>
                            </div>
                        </div>
                        {
                            moviesList.map((row,index) => (
                                <div key={index} className={`row justify-content-center`}> 
                                    <div className={`col-md-11`}>
                                        <h3 className={`text-white`}>{row.genre}</h3>
                                    </div>
                                    <div className={`col-md-11`}>
                                        <Slider>
                                            {row.movies.map(movie => (
                                                <Slider.Item movie={movie} key={movie.id}></Slider.Item>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                : ''}
            </div>
        </>
    )
}

export default Index;