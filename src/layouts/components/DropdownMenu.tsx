"use client";

import React, { useEffect, useRef, useState } from "react";

interface IMenuItem {
  id: string;
  label: string;
  handleMenuItemClick?: () => void;
}

interface DropdownMenuProps {
  items: IMenuItem[];
  buttonLabel: string;
  handleMenuItemClick: any;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, buttonLabel, handleMenuItemClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<any>(null);
  console.log(menuRef)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleDocumentClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleDocumentClickOutside);

    return () => {
      document.removeEventListener("click", handleDocumentClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left text-light" ref={menuRef}>
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={toggleMenu}
        id="menu-button"
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        {buttonLabel}
        <svg
          className={`-mr-1 h-5 w-5 text-gray-400 transform ${isMenuOpen ? "rotate-180" : ""
            } transition-transform`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            {items.map((item) => (
              <p
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className="block px-4 py-2 text-sm cursor-pointer hover:bg-dark hover:text-white"
                role="menuitem"
                tabIndex={-1}
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
