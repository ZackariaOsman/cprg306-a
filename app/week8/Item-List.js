'use client';
import {useState} from 'react';
import { ItemCard } from "./Item.js";



export function ItemList({items, onItemSelect}){
  const [sortBy, setSortBy] = useState('name');

  let sortedItems = [...items];

  if (sortBy == 'name'){
    sortedItems.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
  else if (sortBy == 'category'){
    sortedItems.sort((a, b) => (a.category > b.category) ? 1 : -1)
  }
  

  return(
    <div>
      <div className="flex justify-between">
        <button onClick={() => setSortBy('name')} className='gap-10 h-10 appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>Sort by name</button>
        <button onClick={() => setSortBy('category')} className='gap-10 h-10 appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>Sort by category</button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <ItemCard 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}