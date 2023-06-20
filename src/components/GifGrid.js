import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// useEffect: usar cierto código de manera condicional

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        { loading && <p className='animate__animated animate__flash'>Loading</p> }
        <div className='card-grid'>
            {
                images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } //envia cada propiedad como una propiedad independiente
                        />
                    ))
            }
        </div>
    </>
  )
};

export default GifGrid;
