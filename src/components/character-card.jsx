import React, { useState, useEffect } from "react";
import Fav from "./favs.jsx";

const style = {
  wrap: {
    // border: "1px solid silver",
    borderRadius: "4px",
    padding: "16px 8px",
    cursor: "pointer",
    background: "rgb(32, 35, 41)",
    color: "#fff",
    display: "flex"
  },
  image: {
    borderRadius: "10px",
    width: "80px",
    height: "100px",
    marginRight: "10px"
  },
  name: {
    color: "rgb(255, 152, 0)"
  },
  title: {
    fontWeight: "bold",
    display: "block",
    color: "rgb(158, 158, 158)"
  }
};

export default props => {
  const [imageUrl, setImageUrl] = useState();
  const [isFav, setIsFav] = useState(false);

  const handleDetail = () => {
    props.handleDetail(props.name);
  };

  useEffect(() => {
    // Convert url from http to https for cors proplem
    const newUrl = props.image.replace("http", "https");
    setImageUrl(newUrl);
    const storage = JSON.parse(localStorage.getItem("fav-list")) || [];
    const indexItem = storage.indexOf(props.name);
    if (indexItem != -1) {
      setIsFav(true);
    }
  }, []);

  return (
    <div
      style={style.wrap}
      className="flex position-relative"
      onClick={handleDetail}
    >
      <Fav isFav={isFav} name={props.name} />
      <img
        style={style.image}
        src={imageUrl}
        className="rounded float-start"
        alt=""
      />
      <div>
        <h5 style={style.name}>{props.name}</h5>
        <div class="d-flex">
          <p class="me-3">
            <small style={style.title}>House</small>
            <small style={style.summary}>{props.house}</small>
          </p>
          <p>
            <small style={style.title}>Ancestry</small>
            <small style={style.summary}>{props.ancestry.toUpperCase()}</small>
          </p>
        </div>
      </div>
    </div>
  );
};
