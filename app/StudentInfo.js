import React from 'react';
import Link from 'next/link';

export function StudentInfo(props){
  return (
    <div>
        <p>Name: {props.name} </p>
        <p>Course section: {props.section}</p>
        <Link href="https://github.com/ZackariaOsman?tab=repositories">www.github.com</Link>
    </div>
  );
}