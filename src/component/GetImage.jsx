
import ImageContainer from "../UI/ImageContainer";

import classes from "./GetImage.module.css";

function GetImage(prop) {
  const { data } = prop;
  const ImageData = data?.hits;
  return (
    <div className={classes.grid}>
      {ImageData?.map((dat) => (
        <div className={classes.child} key={dat.id}>
          <ImageContainer imageURL={dat.largeImageURL} tags={dat.tags} id={dat.id} />
        </div>
      ))}
    </div>
  );
}

export default GetImage;
