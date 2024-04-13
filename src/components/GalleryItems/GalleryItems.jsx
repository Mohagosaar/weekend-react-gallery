import React, { useState } from "react";
import "./GalleryItems.css";

function GalleryItems({ gallery }) {
  console.log("Gallery is full of", gallery);

  // Initialize an object to track the visibility state of each gallery item by its id
  const [visibility, setVisibility] = useState({});

  const toggleDescription = (id) => {
    // Toggle the visibility of the clicked item
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const handleLike = () => {
    // Implement like functionality
  };

  return (
    <div data-testid="galleryItem" className="gallery-item">
      {gallery.map((galleryData) => {
        const { id, url, description } = galleryData;
        return (
          <div
            key={id}
            className="gallery-img"
            onClick={() => toggleDescription(id)}
          >
            {visibility[id] ? <p>{description}</p> : <img src={url} />}
            <button onClick={handleLike}>Love it</button>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryItems;
