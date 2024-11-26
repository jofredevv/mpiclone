import React from 'react';

export default function LanguageSelector() {
  return (
    <div className="relative inline-block">
      <select 
        className="appearance-none bg-transparent pl-8 pr-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        defaultValue="es"
      >
        <option value="es" className="flex items-center">
          ES
        </option>
        <option value="en" className="flex items-center">
          EN
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
        <img
          src="https://flagcdn.com/w20/es.png"
          srcSet="https://flagcdn.com/w40/es.png 2x"
          width="20"
          height="15"
          alt="Spain"
          className="rounded-sm"
        />
      </div>
    </div>
  );
}