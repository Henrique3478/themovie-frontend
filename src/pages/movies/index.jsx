import React from 'react';

import Slide from '../../components/slide/index';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Index(){

    // const onChange = (value) => {
    //     console.log(value)
    // }

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
                    <Slide />
                </div>
                <div className={`row justify-content-center mt-5`}>
                    <div className={`col-md-12`}>
                        <h3 className={`text-white`}>Drama</h3>
                    </div>
                    <Slide />
                </div>
                <div className={`row justify-content-center mt-5`}>
                    <div className={`col-md-12`}>
                        <h3 className={`text-white`}>Ação</h3>
                    </div>
                    <Slide />
                </div>
            </div>
        </>
    )
}

export default Index;