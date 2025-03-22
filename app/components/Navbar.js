import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (

    

    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
        <div className="logo font-bold text-1g">
           
            <Link href="/"> Bitlinks</Link>
        </div>
      <ul className='flex space-x-6 text-white text-lg font-semibold'>
        <a href="/"><li>Home</li></a>
    
        <a href="/about"><li >About</li></a>
        <a href="/shorten"><li>Shorten</li></a>
        <a href="/contact"><li >Contact Us</li></a>
        <li className='flex gap-3'>
         <a href="/shorten">   <button className='bg-purple-500 rounded-lg shadow-1g p-3 py-1 font-bold'>Try now</button></a>
         <a href="/github"><button className='bg-purple-500 rounded-lg shadow-1g p-3 py-1 font-bold'>Github</button></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
