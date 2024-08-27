'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside of the menu

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('ul') && !e.target.closest('button')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle swipe left to close the menu
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchMove = (e) => {
      const touchEndX = e.changedTouches[0].clientX;

      if (touchEndX < touchStartX - 50) {
        setMenuOpen(false);
      }

      document.removeEventListener('touchmove', handleTouchMove);
    };

    document.addEventListener('touchmove', handleTouchMove);
  };

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <nav className='flex justify-center py-4'>
      {/* Desktop Menu */}
      <div className='w-fit md:flex justify-center p-2 hidden'>
        <ul className='flex justify-center space-x-12 rounded-full bg-white/5 backdrop-blur-lg border-2 border-white text-md p-2 shadow-xl'>
          <Link href='#Home'><li className='hover:bg-white/60 text-neutral-950 border-2 border-transparent rounded-full p-4'>Home</li></Link>
          <Link href='#About'><li className='hover:bg-white/60 text-neutral-950 border-2 border-transparent rounded-full p-4'>About</li></Link>
          <Link href='#Skills'><li className='hover:bg-white/60 text-neutral-950 border-2 border-transparent rounded-full p-4'>Skills</li></Link>
          <Link href='#Projects'><li className='hover:bg-white/60 text-neutral-950 border-2 border-transparent rounded-full p-4'>Projects</li></Link>
          <Link href='#Contact'><li className='hover:bg-white/60 text-neutral-950 border-2 border-transparent rounded-full p-4'>Contact</li></Link>
        </ul>
      </div>
      <div className='fixed top-0 left-0 w-full z-10 md:hidden'>
        <div className='bg-white p-1 shadow-xl'>
          {menuOpen ? (
            <button className='p-2 hover:scale-[101%]' onClick={toggleMenu}><MdClose size={24} /></button>
          ) : (
            <button className='p-2 hover:scale-[101%]' onClick={toggleMenu}><MdMenu size={24} /></button>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed top-12 left-0 w-full z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>

        <ul className={`relative top-full left-0 w-full flex flex-col items-center justify-start backdrop-blur-lg text-md p-2 h-screen bg-white transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Link href='#Home'><li onClick={toggleMenu} className='hover:bg-gray-200 text-neutral-950 border-2 border-transparent rounded-md p-4'>Home</li></Link>
          <Link href='#About'><li onClick={toggleMenu} className='hover:bg-gray-200 text-neutral-950 border-2 border-transparent rounded-md p-4'>About</li></Link>
          <Link href='#Skills'><li onClick={toggleMenu} className='hover:bg-gray-200 text-neutral-950 border-2 border-transparent rounded-md p-4'>Skills</li></Link>
          <Link href='#Projects'><li onClick={toggleMenu} className='hover:bg-gray-200 text-neutral-950 border-2 border-transparent rounded-md p-4'>Projects</li></Link>
          <Link href='#Contact'><li onClick={toggleMenu} className='hover:bg-gray-200 text-neutral-950 border-2 border-transparent rounded-md p-4'>Contact</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
