import React from 'react';

import Slider from '../../components/slider';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './style.css';

const series = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHsul12ZQ5uKYPUEci3VHWHkRHcE37FxkhIg&usqp=CAU',
      imageBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHsul12ZQ5uKYPUEci3VHWHkRHcE37FxkhIg&usqp=CAU',
      title: '1983'
    },
    {
      id: 2,
      image: 'https://optclean.com.br/wp-content/uploads/2017/07/greenleaf-netflix.jpg',
      imageBg: 'https://optclean.com.br/wp-content/uploads/2017/07/greenleaf-netflix.jpg',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd7Ee-WOtOnMAUl4d5rub9BFIwRqu1AlGYCQ&usqp=CAU',
      imageBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd7Ee-WOtOnMAUl4d5rub9BFIwRqu1AlGYCQ&usqp=CAU',
      title: 'The rain',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/originals/96/e0/d8/96e0d8c9e746843b353928dc0617a511.jpg',
      imageBg: 'https://i.pinimg.com/originals/96/e0/d8/96e0d8c9e746843b353928dc0617a511.jpg',
      title: 'Sex education'
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYHc6_tijxnkAxxalU-AeH3SIEiMvFbMmvgA&usqp=CAU',
      imageBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYHc6_tijxnkAxxalU-AeH3SIEiMvFbMmvgA&usqp=CAU',
      title: 'Elite'
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkKOKm1C2BQyUzlDsUQakdHs8VgZ93SueU0g&usqp=CAU',
      imageBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkKOKm1C2BQyUzlDsUQakdHs8VgZ93SueU0g&usqp=CAU',
      title: 'Black mirror'
    }
];    

const seriesRelease = [
    {
        id: 1,
        image: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/09/hobm-200-unit-03830r2-1599183236-e1601491174873.png',
    },
    {
        id: 2,
        image: 'https://i.ytimg.com/vi/qadLs9zBEgI/maxresdefault.jpg',
    },
    {
        id: 3,
        image: 'https://capricho.abril.com.br/wp-content/uploads/2020/02/c389lite-temporada-3.jpg',
    },
]

function Index(){

    return(
        <>
            <div className={`container-fluid container-custom`}>
                <div className="carousel-custom">
                    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
                        {seriesRelease.map(row => (
                            <div key={row.id}>
                                <img className={`img-custom`} alt={``} src={row.image} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className={`row justify-content-center`}> 
                    <div className={`col-md-11`}>
                        <h3 className={`text-white`}>Séries top 6</h3>
                    </div>
                    <div className={`col-md-11`}>
                        <Slider>
                            {series.map(movie => (
                                <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                                ))}
                        </Slider>
                    </div>
                </div>
                <br/>
                <div className={`row justify-content-center`}> 
                    <div className={`col-md-11`}>
                        <h3 className={`text-white`}>Séries dramáticas</h3>
                    </div>
                    <div className={`col-md-11`}>
                        <Slider>
                            {series.map(movie => (
                                <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                                ))}
                        </Slider>
                    </div>
                </div>
                <br/>
                <div className={`row justify-content-center`}> 
                    <div className={`col-md-11`}>
                        <h3 className={`text-white`}>Séries infantis</h3>
                    </div>
                    <div className={`col-md-11`}>
                        <Slider>
                            {series.map(movie => (
                                <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;