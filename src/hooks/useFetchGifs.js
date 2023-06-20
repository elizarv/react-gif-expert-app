// hooks empiezan con use

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

       // el código se ejecuta solamente por primera vez
       //no pueden ser async, esperan algo sincrono
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [category]);

    return state;
}