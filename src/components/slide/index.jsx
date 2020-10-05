import React from 'react';

import Carousel from 'react-elastic-carousel';

import Item from './item';

import './style.css';

function Index(){
    return(
        <Carousel itemsToShow={5}>
            <Item>
                <img className="img-fluid" src={`https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732`}/>
            </Item>
            <Item>
                <img className="img-fluid" src={`https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732`}/>
            </Item>
            <Item>
                <img className="img-fluid" src={`https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732`}/>
            </Item>
            <Item>
                <img className="img-fluid" src={`https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732`}/>
            </Item>
            <Item>
                <img className="img-fluid" src={`https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732`}/>
            </Item>
            <Item>
                <img className="img-fluid" src={`https://occ-0-4356-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABffpRGxaTHHjcCcgchWPQdBIPrcwnxbeXWtfV4YcxPK_Ff1RJ5rZVu_tCEii8KrqCnAHNfRSct13LvxAmOd57HeO6H1z.webp?r=732`}/>
            </Item>
        </Carousel>
    )
}

export default Index;