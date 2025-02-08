import React, { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [imageList, setImageList] = useState([]);

  // ページロード時に犬種一覧を取得
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();

        if (data && data.message) {
          const breedList = Object.keys(data.message);
          setBreeds(breedList);

          // 最初の犬種をデフォルト選択
          if (breedList.length > 0) {
            setSelectedBreed(breedList[0]);
            fetchBreedImages(breedList[0]); // 初期状態で画像を取得
          }
        }
      } catch (error) {
        console.error("犬種一覧の取得に失敗しました:", error);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const fetchBreedImages = async (breed = selectedBreed) => {
    const targetBreed = breed || selectedBreed;

    if (!targetBreed) {
      console.error("犬種が選択されていません。");
      return;
    }

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${targetBreed}/images/random/12`);
      const data = await response.json();

      if (data && data.message) {
        setImageList(data.message);
      }
    } catch (error) {
      console.error("画像の取得に失敗しました:", error);
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'center' }}>
        <h2 style={{ margin: '0 20px 0 0' }}>Breeds List</h2>
        <BreedsSelect 
          breeds={breeds} 
          selectedBreed={selectedBreed} 
          onChange={handleBreedChange} 
        />
        <button 
          onClick={() => fetchBreedImages()} 
          style={{
            marginLeft: '10px', 
            padding: '8px 16px', 
            backgroundColor: '#007BFF', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            height: '40px', 
            cursor: 'pointer',
            lineHeight: '24px'
          }}
        >
          表示
        </button>
      </div>
      <div>
        {imageList.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {imageList.map((imageUrl, index) => (
              <img 
                key={index} 
                src={imageUrl} 
                alt={`${selectedBreed}の画像`} 
                style={{
                  width: '150px', 
                  height: '150px', 
                  objectFit: 'cover', 
                  borderRadius: '8px', 
                  border: '1px solid #ccc'
                }} 
              />
            ))}
          </div>
        ) : (
          <p>画像が表示される場所です。犬種を選択し、「表示」ボタンをクリックしてください。</p>
        )}
      </div>
    </div>
  );
};
