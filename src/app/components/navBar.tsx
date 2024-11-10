"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='pb-[3%]'>
    <ul className='flex flex-row justify-between'>
      <li className='text-center pr-32 mt-[-15px]'>
        <Link href="/">
        <h3>Morgane Vanden Broeck</h3>
        <p className='uppercase'>Iliokahu</p>
        </Link>
      </li>
      <li>
        <Link href="/overview" className={pathname === '/overview' ? 'underline' : 'hover:underline'}>Présentation</Link>
      </li>
      <li>
        <Link href="/"  className={pathname === '/' ? 'underline' : 'hover:underline'}>Travail comportemental</Link>
      </li>
      <li>
        <Link href="/" className={pathname === '/' ? 'underline' : 'hover:underline'}>Gardes d'animaux</Link>
      </li>
      <li>
        <Link href="/" className={pathname === '/' ? 'underline' : 'hover:underline'}>Coordonnées</Link>
      </li>
    </ul>
  </nav>
  );
}