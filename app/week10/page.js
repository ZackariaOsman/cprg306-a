'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { ItemList } from "./Item-List";
import ItemCard from "./Item";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from './_services/shopping-list-services';
import { useUserAuth } from "./_utils/auth-context";

export default function Week6() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = () => {
    firebaseSignOut();
  };

  const handleAddItem = async (newItem) => {
    if (user) {
      const id = await addItem(user.uid, newItem);
      setItems(prevItems => [...prevItems, { id, ...newItem }]);
    }
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
                <button className='gap-10 h-10 appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' onClick={handleSignIn}>Sign In</button>
                <button className='gap-10 h-10 appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' onClick={handleSignOut}>Sign Out</button>
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