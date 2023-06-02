import React, { useState, useRef } from 'react';
import './App.css';
import ImgGallery from "./ImgGallery";

function App() {
  //input用
  const [inputText, setInputText] = useState("");
  //写真データ用
  const [fetchData,setFetchData] = useState([]);


  const handleSubmit =(e)=>{
    // enter時の時の自動リロードを防ぐ
    e.preventDefault();

    //APIURL
    const API_KEY = "36911322-c35cd3a113aaec182e43669d2";
    //クエリパラメータ　inputで受け取ったものをクエリに埋め込む
    const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + //inputから値を取得して埋め込む
    //非同期
    fetch(URL)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      //map適応 hits配列
      setFetchData(data.hits);
    });
  };

  return (
    <>
      <div className='container'>
        <h2>pix</h2>  
        <form onSubmit={(e)=>handleSubmit(e)}>
          <inpue type='text' placeholder='画像を探す'/>
        </form>
        {/* コンポーネントにデータを渡す */}
        <ImgGallery fetchData={fetchData} />
      </div>
    </>
  );
}

export default App;
