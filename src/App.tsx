import React, { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';
import ImgGallery from "./ImgGallery";

interface Image {
  largeImageURL: string,
  webformatHeight: number,
  webformatWidth: number,
  likes: number,
  imageWidth: number,
  id: number,
  user_id: number,
  views: number,
  comments: number,
  pageURL: string,
  imageHeight: number,
  webformatURL: string,
  type: string,
  previewHeight: number,
  tags: string,
  downloads: number,
  user: string,
  favorites: number,
  imageSize: number,
  previewWidth: number,
  userImageURL: string,
  previewURL: string
}

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [fetchData,setFetchData] = useState<Image[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const API_KEY = "36911322-c35cd3a113aaec182e43669d2";
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${inputText}`
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      setFetchData(data.hits);
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value)
  }

  return (
    <>
      <div className='container'>
        <h2>pix</h2>  
        <form onSubmit={handleSubmit}>
          <input type='text' value={inputText}  onChange={handleChange} placeholder='画像を探す'/>
        </form>
        <ImgGallery fetchData={fetchData} />
      </div>
    </>
  );
}

export default App;
