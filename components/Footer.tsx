
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="mt-1">
          Developed with <span className="text-red-500">&hearts;</span> by <span className="text-teal-400 font-semibold">{PERSONAL_INFO.name}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;