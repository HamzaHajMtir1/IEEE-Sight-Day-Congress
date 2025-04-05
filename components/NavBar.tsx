'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
}

interface NavbarProps {
  navigation: NavigationItem[

  ];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <header className="absolute inset-x-10 rounded-full top-4 z-50 backdrop-blur-md bg-white/30">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">IEEE SIGHT Day Congress</span>
            <img
              alt="IEEE SDC Logo"
              src="/favicon.ico"
              className="h-16 w-auto"
            />
            <h2 className="ml-3 text-xl font-bold text-gray-100">IEEE SIGHT Day Congress</h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-bold leading-4 px-3 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                  isActive
                    ? 'bg-sdc2 text-gray-900'
                    : 'text-white hover-text-sdc2 hover:bg-sdc2'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">IEEE SIGHT Day Congress</span>
              <img
                alt="Power GYM Logo"
                src="/favicon.ico"
                className="h-12 w-auto"
              />
              <h2 className="ml-3 text-xl font-bold text-black">IEEE SIGHT Day Congress</h2>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-sdc2 hover:bg-sdc2"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y text-sdc2">
              {/* Navigation Links */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        isActive
                          ? 'bg-sdc2 text-gray-900'
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;