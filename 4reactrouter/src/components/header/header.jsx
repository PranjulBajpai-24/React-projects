import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-screen-xl p-4 lg:py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-16"
              alt="Logo"
            />
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink
                to="/"
                className="text-gray-900 hover:text-gray-500"
                activeClassName="font-bold"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-900 hover:text-gray-500"
                activeClassName="font-bold"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className="text-gray-900 hover:text-gray-500"
                activeClassName="font-bold"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
