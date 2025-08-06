import React from 'react';
import { CATEGORIES, SOCIALS } from '../constants';
import type { Category, SocialLink } from '../types';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const NavItem: React.FC<{ item: Category, isActive: boolean, onClick: () => void }> = ({ item, isActive, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-[#3b3b4f] text-slate-100 shadow-md'
          : 'text-slate-400 hover:bg-[#3b3b4f]/50 hover:text-slate-200'
      }`}
    >
      {item.icon}
      <span className="font-medium text-sm">{item.name}</span>
    </button>
  </li>
);

const SocialItem: React.FC<{ item: SocialLink }> = ({ item }) => (
  <li>
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-slate-400 hover:bg-[#3b3b4f]/50 hover:text-slate-200 transition-colors duration-200"
    >
      {item.icon}
      <span className="font-medium text-sm">{item.name}</span>
    </a>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-black/20 p-6 flex flex-col justify-between border-r border-slate-100/10">
      <div>
        <h2 className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4 px-4">Categories</h2>
        <ul className="space-y-1">
          {CATEGORIES.map((cat) => (
            <NavItem
              key={cat.id}
              item={cat}
              isActive={activeSection === cat.id}
              onClick={() => onNavigate(cat.id)}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4 px-4">Social Link</h2>
        <ul className="space-y-1">
          {SOCIALS.map((social) => (
            <SocialItem key={social.name} item={social} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;