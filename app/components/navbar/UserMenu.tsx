'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

export const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setisOpen] = useState(false);
  const userRegisterModal = useRegisterModal();
  const userLoginModal = useLoginModal();

  const toggleIsOpen = useCallback(() => {
    setisOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div
        className='
                    flex
                    flex-row
                    items-center
                    gap-3
                '
      >
        <div
          className='
                        hidden
                        cursor-pointer
                        rounded-full
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        transition
                        hover:bg-neutral-100
                        md:block
                    '
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleIsOpen}
          className='
                        flex
                        cursor-pointer
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        border-[1px]
                        border-neutral-200
                        p-4
                        transition
                        hover:shadow-md
                        md:px-2
                        md:py-1
                    '
        >
          <AiOutlineMenu></AiOutlineMenu>
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='
                            absolute
                            right-0
                            top-12
                            w-[40vw]
                            overflow-hidden
                            rounded-xl
                            bg-white
                            text-sm
                            shadow-md
                            md:w-3/4
                        '
        >
          <div className='flex cursor-pointer flex-col'>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='My Trips' />
                <MenuItem onClick={() => {}} label='My Favorites' />
                <MenuItem onClick={() => {}} label='My Reservations' />
                <MenuItem onClick={() => {}} label='My Properties' />
                <MenuItem onClick={() => {}} label='Airbnb my home' />
                <MenuItem onClick={() => signOut()} label='Logout' />
              </>
            ) : (
              <>
                <MenuItem onClick={userLoginModal.onOpen} label='Login' />
                <MenuItem onClick={userRegisterModal.onOpen} label='Sign up' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
