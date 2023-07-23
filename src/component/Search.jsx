import { useState, useCallback } from "react";
import find from "../assets/find1.png";
import classes from "./Search.module.css";
import { apiGet } from "../misc/config";
import GetImage from "./GetImage";
import { useImageDataContext } from "../context/ImageDataContext";
import Spinner from "./Spinner";

function Search() {
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState("");
  const [results, setResults] = useState(null);
  const [visible, setVisible] = useState(true);
  const { updateImageData, updateLoading, isLoading } = useImageDataContext();

  const onSearch = useCallback(async () => {
    if(input===''){
      alert("Please enter the Input");
      return;
    }
    updateLoading(true);
    try {
      const result = await apiGet(`&q=${input}`);
      setResults(result);
      updateImageData(result?.hits);
      setVisible(false);
      setSearched(input);
      setInput("");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      updateLoading(false);
    }
  }, [input, updateImageData, updateLoading]);
  
  const onInputChange = useCallback(
    (ev) => {
      setInput(ev.target.value);
    },
    [setInput]
  );

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <div className=" py-3 my-3 d-flex flex-column">
      {visible && (
        <div className="text-light d-flex flex-column align-items-center">
          <h1>Discover over 2,000,000</h1>
          <h1>free Stock Images</h1>
        </div>
      )}
      <div className=" mt-5 d-flex justify-content-center">
        <div className={`w-50 ${classes.searchBar}`}>
          <div className={classes.findContainer}>
            <img src={find} alt="find" />
          </div>
          <div className={classes.divider}></div>
          <div className={`${classes.inputContainer}`}>
            <input
              className={classes.input}
              placeholder="search"
              type="text"
              onChange={onInputChange}
              onKeyDown={onKeyDown}
              value={input}
            />
          </div>
          <div>
            <button className={classes.goButton} onClick={onSearch}>
              GO!
            </button>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center mt-4 text-light">
        {!visible && (
          <div>
            <h3 className="text-capitalize">Results: {searched}</h3>
          </div>
        )}
      </div>
      {isLoading && <Spinner />}
      {!visible && !isLoading && (
        <div className={classes.grid}>
          <GetImage data={results} />
        </div>
      )}
    </div>
  );
}

export default Search;
