import React, { useState } from "react";
import "./GalleryItems.css";
import axios from "axios";

function GalleryItems({ gallery }) {
  const [visibility, setVisibility] = useState([]);

  const toggleDescription = (id) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const handleLike = (id) => {
    axios.post(`/api/gallery/${id}`).then((response) => {
      console.log();
    });
  };

  return (
    <div data-testid="galleryItem" className="gallery-item">
      {gallery.map((galleryData) => {
        return (
          <div
            key={galleryData.id}
            className="gallery-img"
            onClick={() => toggleDescription(galleryData.id)}
          >
            {visibility[galleryData.id] ? (
              <span>{galleryData.description}</span>
            ) : (
              <img src={galleryData.url} />
            )}
            <div className="btn-count">
              <button onClick={() => handleLike(gallery.likes)}>
                <span> {galleryData.likes}</span>
                Love it
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryItems;
