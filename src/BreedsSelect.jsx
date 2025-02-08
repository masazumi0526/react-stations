import React from 'react';

export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <select 
        id="breed-select" 
        value={selectedBreed} 
        onChange={onChange} 
        style={{ 
          padding: '8px 12px', 
          borderRadius: '4px', 
          height: '40px', 
          lineHeight: '24px' 
        }}
      >
        <option value="">選択してください</option>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};
