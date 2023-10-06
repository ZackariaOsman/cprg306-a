import React from "react";
import CarCard from "./Car-Card";

export default function CarList() {
    const car1 = {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
      };
      
      const car2 = {
        make: "Honda",
        model: "Civic",
        year: 2023,
        color: "Blue",
      };
      
      const car3 = {
        make: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Red",
      };
      
      const car4 = {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        color: "White",
      };
      
      const car5 = {
        make: "Nissan",
        model: "Altima",
        year: 2023,
        color: "Black",
      };
    
    return (
        <div>
            <CarCard make={car1.make} model={car1.model} year={car1.year} color={car1.color}></CarCard>
            <CarCard make={car2.make} model={car2.model} year={car2.year} color={car2.color}></CarCard>
            <CarCard make={car3.make} model={car3.model} year={car3.year} color={car3.color}></CarCard>
            <CarCard make={car4.make} model={car4.model} year={car4.year} color={car4.color}></CarCard>
            <CarCard make={car5.make} model={car5.model} year={car5.year} color={car5.color}></CarCard>
        </div>

        
    );
}