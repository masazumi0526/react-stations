import React from 'react';

export const DogImage = ({ imageUrl }) => {
  return (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <img 
        src={imageUrl} 
        style={{
          maxWidth: '80%', 
          height: 'auto',
          border: '1px solid #ccc', 
          borderRadius: '8px'
        }}
        alt="可愛い犬の画像"
      />
    </div>
  );
};
