import React from 'react';

import Slide from '../../components/slide/index';

function Index(){
    return(
        <>
            <div className={`container-fluid`}>
                <br/>
                <div className={`row mt-5`}> 
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