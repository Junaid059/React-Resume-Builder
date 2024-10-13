import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-4 px5 flex justify-between shadow-md">
      <img src="/logo.svg" alt="logo" />

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/sign-in'}>
          <button className="bg-orange-400 rounded-md p-2 hover:bg-orange-500">
            Get Started
          </button>
        </Link>
      )}
    </div>
  );
}

export default Header;
