// ImageContainer.js

import classes from "./ImageContainer.module.css";
import ImageModal from "./ImageModal";

function ImageContainer(prop) {
  const { imageURL, tags, id } = prop;
  const tagsArray = tags.split(", ");

  return (
    <ImageModal id={id} imageURL={imageURL} tags={tagsArray}>
      <div className={classes.container}>
        <div>
          <img src={imageURL} style={{height:"300px"}} alt="image" />
        </div>
        <div className={classes.tagsContainer}>
          {tagsArray.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </ImageModal>
  );
}

export default ImageContainer;
