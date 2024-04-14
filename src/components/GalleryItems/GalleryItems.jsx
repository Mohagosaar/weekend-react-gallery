import React, { useState } from "react";
import "./GalleryItems.css";
import axios from "axios";

function GalleryItems({ gallery, loadGallery }) {
  const [visibility, setVisibility] = useState([]);

  const toggleDescription = (id) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const handleLike = (id) => {
    axios
      .put(`/api/gallery/${id}`)
      .then((response) => {
        console.log(response.data);
        loadGallery();
      })
      .catch((error) => {
        console.log("Error /UPDATE", error);
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
              <img src={galleryData.url} alt={galleryData.description} />
            )}
            <div className="btn-count">
              <button onClick={() => handleLike(galleryData.id)}>
                <span> {galleryData.likes}</span>
                Like
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryItems;
