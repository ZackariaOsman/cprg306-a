import { ItemList } from "./Item-List";

export function ItemCard({name, quantity, category, onSelect}){
  return(
  <div className="border border-gray-500 bg-white-800 w-full max-w-xs m-4 p-2 text-black-500 " onClick={onSelect}>
    <h3 className="text-xl font-bold">{name}</h3>
    <p>Quantity: {quantity}</p>
    <p>Category: {category}</p>
  </div>
  );
}