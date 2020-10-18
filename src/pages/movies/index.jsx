import React from 'react';

import Slider from '../../components/slider';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const base = "file:///C:/Apache24/htdocs/themovie-frontend/src/pages/movies/images";

const movies = [
    {
      id: 1,
      image: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      imageBg: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      title: '1983'
    },
    {
      id: 2,
      image: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      imageBg: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      imageBg: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      title: 'The rain',
    },
    {
      id: 4,
      image: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      imageBg: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      title: 'Sex education'
    },
    {
      id: 5,
      image: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      imageBg: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      title: 'Elite'
    },
    {
      id: 6,
      image: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      imageBg: 'https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732',
      title: 'Black mirror'
    }
];    

function Index(){

    return(
        <>
            <div className={`container-fluid`}>
                <div className="row">
                    <div className="col-md-12">
                        <Carousel showIndicators={true} showStatus={false} showThumbs={false}>
                            <div>
                                <img alt={``} src="https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732" />
                            </div>
                            <div>
                                <img alt={``} src="https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732" />
                            </div>
                            <div>
                                <img alt={``} src="https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <div className={`row`}> 
                    <div className={`col-md-12`}>
                        <h3 className={`text-white`}>Filmes populares</h3>
                    </div>
                    <Slider>
                        {movies.map(movie => (
                            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Index;