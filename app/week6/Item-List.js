'use client';
import {useState} from 'react';
import { ItemCard } from "./Item.js";
const items = require("./items.json");



export function ItemList(){
  const [sortBy, setSortBy] = useState('name');

  if (sortBy == 'name'){
    items.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
  else if (sortBy == 'category'){
    items.sort((a, b) => (a.category > b.category) ? 1 : -1)
  }
  

  return(
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <h2 className=" ml-4 text-3xl font-bold">Sort By: </h2>
          <div className=" justify-between">
          <button class=" mb-8 ml-8 mr-5 text-xl bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded shadow leading-tight focus:outline-none focus:shadow-outline" onClick={() => setSortBy('name')}>Name</button>
          <button class=" text-xl bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded shadow leading-tight focus:outline-none focus:shadow-outline" onClick={() => setSortBy('category')}>Category</button>
          </div>
        </div>
      </div>
      <div className="flex-col justify-between">
        {items.map((item) => (
          <ItemCard key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
}