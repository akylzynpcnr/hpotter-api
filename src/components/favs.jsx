import React, { useState, useEffect } from "react";
import "../style.css";

const style = {
  likeButton: {
    position: "absolute",
    right: "10px",
    top: "10px"
  }
};

export default props => {
  const [isFav, setIsFav] = useState();

  const addToFav = () => {
    const favList = JSON.parse(localStorage.getItem("fav-list")) || [];
    favList.push(props.name);
    localStorage.setItem("fav-list", JSON.stringify(favList));
    setIsFav(true);
  };

  const removeToFav = () => {
    const favList = JSON.parse(localStorage.getItem("fav-list"));
    const indexItem = favList.indexOf(props.name);
    favList.splice(indexItem, 1);
    localStorage.setItem("fav-list", JSON.stringify(favList));
    setIsFav(false);
  };

  const toggleFav = status => {
    if (status) {
      removeToFav();
    } else {
      addToFav();
    }
  };

  useEffect(() => {
    setIsFav(props.isFav);
  }, [props.isFav]);

  return (
    <span
      className={isFav ? "like-button is-fav" : "like-button"}
      onClick={() => {
        toggleFav(isFav);
      }}
    >
      <svg
        style={style.likeButton}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </span>
  );
};
