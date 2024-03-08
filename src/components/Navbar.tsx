import React from 'react';

import AuthentificationModal from './AuthentificationModal';
import { ThemeToggle } from './site/theme-toggle';

const Navbar = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between border-b py-4">
      {/* logo */}
      <span>شعار الموقع</span>

      {/* left side */}
      <div className="flex flex-row items-center gap-2">
        <ThemeToggle />
        <AuthentificationModal />
      </div>
    </div>
  );
};

export default Navbar;
