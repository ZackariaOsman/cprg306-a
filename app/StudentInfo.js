import React from 'react';
import Link from 'next/link';

export function StudentInfo(){
  return (
    <div>
        <p>Name: Zackaria Osman </p>
        <p>Course section: CPRG-306-D </p>
        <Link href="https://github.com/ZackariaOsman?tab=repositories">www.github.com</Link>
    </div>
  );
}