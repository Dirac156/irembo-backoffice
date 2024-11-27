import React from 'react';
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4" style={{ color: '#0073e6' }} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
        style={{
          borderColor: '#99c2ff',       // Replace border-sky-200
          boxShadow: '0 0 0 2px #0073e6', // Replace focus:ring-sky-500
        }}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
