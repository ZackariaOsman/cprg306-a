import React from 'react';

export default function CarCard({make, model, year, color}) {
    return (
        <div>
            <h2>Make: {make}</h2>
            <h3>Model: {model}</h3>    
            <h4>Year: {year}</h4>
            <h4>Color: {color}</h4>
        </div>
    );
}
