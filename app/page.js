import Image from 'next/image'
import { StudentInfo } from '../app/StudentInfo'  // import the StudentInfo component
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 class="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <div>
          {StudentInfo() /* call the StudentInfo component */}
          <Link href="week2\page.js">Week 2</Link>
        </div>
      </div>
    </main>
  
  
  )
}
