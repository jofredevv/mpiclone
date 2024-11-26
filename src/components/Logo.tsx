import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="https://i.imgur.com/PIZI9N2.png" 
        alt="MyPublicInbox" 
        className="h-8 w-auto"
        style={{ 
          maxWidth: '160px',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}