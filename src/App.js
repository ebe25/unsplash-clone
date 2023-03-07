import React, { useState,useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("random");
  const [images, setImages] = useState([]);
  const url = "e16F89mecl_dHk-4ReET4K-OCb1TR4Pa2cYoCjGxPrg";
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${url}&query=${query}&orientation=squarish&per_page=12`
      );
      // setData(response.results)
      // console.log(response.data.results);

      setImages(response.data.results);
    } catch (e) {
      console.log(e, "Error occured");
    }
  };
  useEffect(() => {
    fetchImages();
  })
  
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input
          style={{ width: "30%" }}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            
          }}
        />
        <button onClick={fetchImages}>Send</button>
      </div>
      <div className="gallery">
        {images.map((image) => {
          return <img className='image-item' key={image.id} src={image.urls.regular} alt={image.description}/>;
        })}
      </div>
    </div>
  );
}

export default App;
