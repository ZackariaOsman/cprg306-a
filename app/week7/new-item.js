'use client';
import {useState} from 'react';


export default function NewItem({onAddItem}) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, quantity, category };
        onAddItem(newItem);    
        setName('');
        setQuantity(1);
        setCategory('produce');
    };
    
        
    return(
        <main>
            <div class="z-10 max-w-5xl w-full items-center font-mono text-sm">
                <form className='flex justify-between' onSubmit={handleSubmit}>
                    
                    {/**Item Name**/}
                    <div className='mt-2.5'>
                        <label htmlFor="itemName" className='text-xl'>Item Name: </label>
                        <input id="itemName" className='h-10 w-30 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="itemName"
                        />
                    </div>
                    
                    {/**Quantity**/}
                    <div className='mt-2.5'>
                        <label htmlFor="itemQuantity" className='text-xl'>Quantity: </label>
                        <input id="itemQuantity" className='h-10 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                            type="number"
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            name="itemQuantity"
                        />
                    </div>
                    
                    {/**Category**/}
                    <div className='mt-2.5'>
                        <label htmlFor="itemCategory" className='text-xl'>Category: </label>
                        <select id="itemCategory" className='gap-10 h-10 appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                        
                    {/**Submit Button**/}
                    <div>
                        <button className='mt-2 text-xl bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded shadow leading-tight focus:outline-none focus:shadow-outline'>Submit</button>
                    </div>
                    
                </form>
            </div>
        </main>
    );
};