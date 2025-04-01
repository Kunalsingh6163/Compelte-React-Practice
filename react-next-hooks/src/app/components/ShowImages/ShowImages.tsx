"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ShowImages() {
  const [images, setImages] = useState([]);

  const getAllImages = async () => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setImages(result || []);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const handleImage = () => {
    getAllImages();
    console.log("Image is clicked");
  };
  return (
    <div>
      <h1>Show all Images through lorem picsum.</h1>
      <div>
        <button onClick={handleImage} className="bg-zinc-500">
          Show Image
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {images.map((image) => {
          return (
            <div key={image?.id}>
              <img
                src={image?.download_url
                }
                maxheight={300}
                maxwidth={300}
                // height={image?.height}
                alt={`Photo by ${image?.author}`}
                className="w-full h-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowImages;
