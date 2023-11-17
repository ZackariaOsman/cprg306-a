'use client';
import {useState} from 'react';
import Link from "next/link";
import { ItemList } from "./Item-List";
import ItemCard from "./Item";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from './meal-ideas';



export default function Week6() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
  
    const handleAddItem = (newItem) => {
      setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedName);
      };

    return(
        <html lang="en">
        <head>
            <title>Week7</title>
        </head>
        <body>
            <main>
                <div className="flex justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Week7 Shopping List</h1>
                    <hr className="border-t-2 border-black my-4 w-1/2" />
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <MealIdeas ingredient={selectedItemName} />
                </div>
            </main>
        </body>
        </html>
    );
};