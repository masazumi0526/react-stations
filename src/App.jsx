import React, { useState } from 'react';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

export const App = () => {
  const [showImages, setShowImages] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleShowImages = (breed) => {
    setSelectedBreed(breed);
    setShowImages(true);
  };

  return (
    <div>
      <Header />
      <Description />
      <DogListContainer 
        showImages={showImages} 
        selectedBreed={selectedBreed} 
        onShowImages={handleShowImages} 
      />
    </div>
  );
};
