'use client';
import {useState} from 'react';


export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, quantity, category };
        console.log(newItem);
        alert(`You are submitting ${name} ${quantity} ${category}`);    
        setName('');
        setQuantity(1);
        setCategory('produce');
    };
    
        
    return(
        <html>
            <head><title>Week4</title></head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 class="text-4xl font-bold">Week 4 Shopping List</h1>
                <br></br>
                <form className='flex space-x-10' onSubmit={handleSubmit}>
                    <div>
                        <label className=''>Item Name:</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className=''>Quantity:</label>
                        <input
                            type="number"
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className=''>Category:</label>
                        <select className='gap-10'
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
                    
                    <button className=' bg-white px-10'>Submit</button>
                </form>
            </div>
            </main>
        </html>
    )
};