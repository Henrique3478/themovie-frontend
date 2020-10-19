import React from 'react';

import { Route, Switch  } from 'react-router-dom';

import Movies from '../../pages/movies/index';

import Series from '../../pages/series/index';

import PageNotFound from '../../pages/pageNotFound/index';

function Content(props){
    return(
        <Switch>
            <Route exact path='/' component={Movies} component={() => <Movies {...props} />}/>
            <Route path='/series' component={Series} />
            <Route path="*" component={PageNotFound}/>
        </Switch>
    )
}

export default Content;