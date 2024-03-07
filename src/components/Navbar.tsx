import React from 'react';

import AuthentificationModal from './AuthentificationModal';
import { ThemeToggle } from './site/theme-toggle';

const Navbar = () => {
  return (
    <div className="max-w-7xl w-full mx-auto border-b py-4 flex flex-row justify-between items-center">
      {/* logo */}
      <span>شعار الموقع</span>

      {/* left side */}
      <div className="flex flex-row gap-2 items-center">
        <ThemeToggle />
        <AuthentificationModal />
      </div>
    </div>
  );
};

export default Navbar;
