
import { createContext, useContext, useState } from "react";

const ImageDataContext = createContext();

export function useImageDataContext() {
  return useContext(ImageDataContext);
}

export function ImageDataProvider(prop) {
  const [imageData, setImageData] = useState([]);
  const[isLoading,setIsLoading]=useState(false);

  function updateLoading(data){
    setIsLoading(data)
  }

  function updateImageData(data) {
    setImageData(data);
  }

  const value = {
    imageData,
    updateImageData,
    isLoading,
    updateLoading
  };

  return (
    <ImageDataContext.Provider value={value}>
      {prop.children}
    </ImageDataContext.Provider>
  );
}
