import React, { Component } from 'react';
import {Route} from "react-router-dom";

//Import
import MovieLayout from '../layouts/Movie.layout';

const MovieHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route
                {...rest}
                component = {(props) => (
                <MovieLayout>
                    <Component { ...props  }/>
                </MovieLayout>
                )
                }
            />
        </>
    );
};

export default MovieHOC;