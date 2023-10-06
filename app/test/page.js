import React from "react";
import Link from "next/link";
import { StudentInfo } from "../StudentInfo";
import CarList from "./Car-List";


export default function Test() {
    return(
        <html lang="en">
            <head>
                <title>Test</title>
            </head>
            <body>
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                        <div>
                            {/**This is how you comment in react */}
                        </div>

                        <h1 class="text-4xl font-bold">
                            Test
                        </h1>

                        {/* This is a line */}
                        <hr className="border-t-2 border-black my-4"></hr>

                        <div>
                            <h1>
                                This is testing page.
                            </h1>
                        </div>
                        
                        <br></br>

                        <div>
                            {/*you can call the StudentInfo component like this*/}
                            <StudentInfo name="Zackaria Osman" section="CPRG-306-D"></StudentInfo>
                        </div>

                        <br/>
                        <br/>
                        <h1 class="text-4xl font-bold">This is my list of Cars</h1>
                        <hr className="border-t-2 border-black my-4"></hr>
                        <CarList></CarList>

                        <div>
                        </div>

                    </div>
                </main>
            </body>
        </html>
    );
}