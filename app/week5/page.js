import Link from "next/link";
import { ItemList } from "./Item-List";
import { ItemCard } from "./Item";
export default function Week3() {


    return(
        <html lang="en">
        <head>
            <title>Week5</title>
        </head>
        <body>
            <main>
            <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 class="text-4xl font-bold">Week3 Shopping List</h1>
            </div>
            <hr className="border-t-2 border-black my-4 w-1/2"></hr>
            <br />
            <ItemList />
            </main>
        </body>
    </html>
    )
};