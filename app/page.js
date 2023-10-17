import Image from 'next/image'
import { StudentInfo } from './StudentInfo';  // import the StudentInfo component
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <head><title>CPRG 306</title></head>
      <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 class="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <div>
          <StudentInfo name="Zackaria Osman" section = "CPRG-306-D"></StudentInfo>
        </div>
        <div> 
          <Link href = "/test">test</Link>
        </div>
        <div>
          <Link href = "/week2">week2</Link>
        </div>
        <div>
          <Link href = "/week3">week3</Link>
        </div>
        <div>
          <Link href = "/week4">week4</Link>
        </div>
        <div>
          <Link href = "/week5">week5</Link>
        </div>  
        <div>
          <Link href = "/week6">week6</Link>
        </div>    
      </div>
    </main>
  
  
  );
}
