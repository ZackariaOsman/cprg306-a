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
        <button onClick={() => setSortBy('name')}>Sort by name</button>
        <button onClick={() => setSortBy('category')}>Sort by category</button>
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