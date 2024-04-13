import React, { useState, useEffect } from "react";
import GalleryItems from "../GalleryItems/GalleryItems";
import "./GalleryList.css";
import Axios from "axios";

const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  const loadGallery = () => {
    Axios.get("/api/gallery").then((response) => {
      console.log(response.data);
      setGallery(response.data);
    });
  };

  useEffect(() => {
    loadGallery();
  }, []);
  // Dummy data for images
  //   const images = [
  //     {
  //       id: 1,
  //       title: "Image 1",
  //       imageUrl: "/images/1.jpg",
  //       description: "Description 1",
  //       likes: 0,
  //     },
  //     {
  //       id: 2,
  //       title: "Image 2",
  //       imageUrl: "/images/2.jpg",
  //       description: "Description 2",
  //       likes: 0,
  //     },
  //     {
  //       id: 3,
  //       title: "Image 3",
  //       imageUrl: "/images/3.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 4,
  //       title: "Image 3",
  //       imageUrl: "/images/4.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 5,
  //       title: "Image 3",
  //       imageUrl: "/images/5.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 6,
  //       title: "Image 3",
  //       imageUrl: "/images/6.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 7,
  //       title: "Image 3",
  //       imageUrl: "/images/.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 8,
  //       title: "Image 3",
  //       imageUrl: "/images/8.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 9,
  //       title: "Image 3",
  //       imageUrl: "/images/9.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //     {
  //       id: 10,
  //       title: "Image 3",
  //       imageUrl: "/images/10.jpg",
  //       description: "Description 3",
  //       likes: 0,
  //     },
  //   ];

  return (
    <div data-testid="galleryList">
      <GalleryItems gallery={gallery} />
    </div>
  );
};
export default GalleryList;
