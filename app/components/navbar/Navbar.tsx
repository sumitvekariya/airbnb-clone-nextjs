'use client';

import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import { UserMenu } from './UserMenu';
import React from 'react';
import { SafeUser } from '@/app/types';
import Categories from './Categories';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
  return (
    <div className='fixed z-10 w-full bg-white shadow-sm'>
      <div
        className='
            border-b-[1px]
            py-4
        '
      >
        <Container>
          <div
            className='
                       flex
                       flex-row
                       items-center
                       justify-between
                       gap-3
                       md:gap-0 
                    '
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser}></UserMenu>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
