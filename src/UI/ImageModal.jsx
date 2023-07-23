import { useImageDataContext } from "../context/ImageDataContext";
import classes from "./ImageModal.module.css";
import { useState } from "react";

const ImageModal = (prop) => {
  const [selectedOption, setSelectedOption] = useState("small");
  const { id, imageURL, tags } = prop;
  const { imageData } = useImageDataContext();
  const image = imageData?.find((img) => img.id === id);
  const views = image.views;
  const userId = image.user_id;
  const type = image.type;
  const userName = image.user;
  const Download = image.downloads;
  const likes = image.likes;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageURL;
    link.target = "_blank";
    link.download = `image_${id}.jpg`;
    link.click();
  };
  return (
    <>
      <div
        type="button"
        className=""
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${id}`}
      >
        {prop.children}
      </div>

      <div
        className={`modal fade  `}
        id={`exampleModal${id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel${id}`}
        aria-hidden="true"
      >
        <div className={`modal-dialog  ${classes.modal}`}>
          <div className={`modal-content  `}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModalLabel${id}`}>
                {" "}
                Preview ID:{id}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-7">
                  <img src={imageURL} alt="Image" />
                </div>
                <div className="col-md-5">
                  <div>
                    <h4>Download</h4>
                    <div className={classes.radios}>
                      <div className={selectedOption==='small'? classes.bgSelect:''}>
                        <p>Small</p>
                        <input
                          className={`form-check-input ${classes.formChecked}`}
                          type="radio"
                          
                          id="small"
                          value="small"
                          checked={selectedOption === "small"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                      </div>
                      <div className={selectedOption==='medium'? classes.bgSelect:''}>
                        <p>Medium</p>
                        <input
                          className={`form-check-input ${classes.formChecked}`}
                          type="radio"
                          
                          id="medium"
                          value="medium"
                          checked={selectedOption === "medium"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                      </div>
                      <div className={selectedOption==='big'? classes.bgSelect:''}>
                        <p>Big</p>
                        <input
                          className={`form-check-input ${classes.formChecked}`}
                          type="radio"
                          
                          id="big"
                          value="big"
                          checked={selectedOption === "big"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                      </div>
                      <div className={selectedOption==='original'? classes.bgSelect:''}>
                        <p>Original</p>
                        <input
                          className={`form-check-input ${classes.formChecked}`}
                          type="radio"
                          
                          id="original"
                          value="original"
                          checked={selectedOption === "original"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className={classes.btnContainer}>
                      <button className={classes.btn} onClick={handleDownload}>
                        Download for Free!
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5>Information</h5>
                    <div className={classes.grid}>
                      <div className={classes.child}>
                        <p className={classes.head}>User</p>
                        <p className={classes.value}>{userName}</p>
                      </div>
                      <div className={classes.child}>
                        <p className={classes.head}>UserID</p>
                        <p className={classes.value}>{userId}</p>
                      </div>
                      <div className={classes.child}>
                        <p className={classes.head}>type</p>
                        <p className={classes.value}>{type}</p>
                      </div>
                      <div className={classes.child}>
                        <p className={classes.head}>Views</p>
                        <p className={classes.value}>{views}</p>
                      </div>
                      <div className={classes.child}>
                        <p className={classes.head}>Downloads</p>
                        <p className={classes.value}>{Download}</p>
                      </div>
                      <div className={classes.child}>
                        <p className={classes.head}>Likes</p>
                        <p className={classes.value}>{likes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.TagsContainer}>
                <span className={classes.tagsHead}>Tags</span>
                {tags.map((t) => (
                  <span className={classes.tag} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
