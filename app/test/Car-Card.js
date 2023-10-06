import React from 'react';

export default function CarCard({make, model, year, color}) {
    return (
        <div className='border border-gray-500 bg-white-800 w-full max-w-xs m-4 p-2 text-black-500'>
            <div className="text-xl font-bold">
                <h2>{make}</h2>
            </div>
            <h3>Model: {model}</h3>    
            <h4>Year: {year}</h4>
            <h4>Color: {color}</h4>
        </div>
    );
}
