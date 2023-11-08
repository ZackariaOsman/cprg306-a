'use client';
import {useState} from 'react';
import Link from "next/link";
import { ItemList } from "./Item-List";
import ItemCard from "./Item";
import NewItem from "./new-item";
import itemsData from './items.json';


export default function Week6() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
      };

    return(
        <html lang="en">
        <head>
            <title>Week6</title>
        </head>
        <body>
            <main>
            <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 class="text-4xl font-bold">Week6 Shopping List</h1>
            </div>
            <hr className="border-t-2 border-black my-4 w-1/2"></hr>
            <br />
            <NewItem onAddItem={handleAddItem} />
            <br />
            <ItemList items={items} />
            </main>
        </body>
    </html>
    )
};