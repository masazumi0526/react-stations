import React, { useState } from 'react';
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"
  );

  const updateDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error("犬の画像の取得に失敗しました:", error);
    }
  };

  return (
    <main style={{ padding: '20px' }}>
      <section>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{
            marginRight: '20px',
            fontWeight: 'normal',
            textAlign: 'left',
            height: '100px',
            display: 'flex',
            alignItems: 'center'
          }}>
            犬の画像を表示するサイトです。
          </h2>
          <DogImage imageUrl={dogUrl} />
        </div>
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <button 
            onClick={updateDogImage}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            更新
          </button>
        </div>
        <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />
      </section>
    </main>
  );
};
