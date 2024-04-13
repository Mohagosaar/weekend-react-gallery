import React, { useState } from "react";
import "./GalleryItems.css";

function GalleryItems({ gallery }) {
  console.log("Gallery is full of", gallery);
  const [showImage, setShowImage] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowImage(!showImage);
    setShowDescription(!showDescription);
  };

  const handleLike = () => {
    // Implement like functionality
  };

  return (
    <div data-testid="galleryItem" className="gallery-item">
      {gallery.map((galleryData) => {
        return (
          <div key={galleryData.id} className="gallery-img">
            <img src={galleryData.url} />
            <p>{galleryData.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryItems;
