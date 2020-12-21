import React, { useState, useEffect } from "react";
import { CharacterDetail } from "../components";
import Fav from "./favs.jsx";
import "../style.css";

const style = {
  wrap: {
    border: "1px solid silver",
    borderRadius: "4px",
    padding: "16px 8px",
    cursor: "pointer"
  },
  image: {
    borderRadius: "10px",
    width: "80px",
    height: "100px",
    marginRight: "10px"
  }
};

export default props => {
  const [imageUrl, setImageUrl] = useState();
  const [isFav, setIsFav] = useState(false);
  const [detail, setDetail] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleDetail = () => {
    const storage = JSON.parse(localStorage.getItem("characters"));
    const character = storage.filter(item => item.name == props.name)[0];
    setDetail(character);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    console.log("close");
  };

  useEffect(() => {
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
        <h6>{props.name}</h6>
        <p>
          <small>House: {props.house}</small>
        </p>
        <p>
          <small>Ancestry: {props.ancestry.toUpperCase()}</small>
        </p>
      </div>
      <CharacterDetail
        character={detail}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </div>
  );
};
