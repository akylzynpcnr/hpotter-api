import React, { useState, useEffect } from "react";
import { CharacterCard, Menu, CharacterDetail } from "./components";
import { CONSTANTS } from "./constants";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function App() {
  const [template, setTemplate] = useState();
  const [detail, setDetail] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleDetail = name => {
    const storage = JSON.parse(localStorage.getItem("characters"));
    const character = storage.filter(item => item.name == name)[0];
    setDetail(character);
    setIsOpen(!isOpen);
  };

  const handleClose = status => {
    setIsOpen(false);
  };

  const createTemplate = characters => {
    return characters.map((character, index) => {
      return (
        <div className="col-12 col-md-4 mt-4" key={index}>
          <CharacterCard
            name={character.name}
            image={character.image}
            house={character.house}
            ancestry={character.ancestry}
            handleDetail={handleDetail}
          />
        </div>
      );
    });
  };

  const getCharacters = () => {
    fetch(`${CONSTANTS.ENDPOINT}characters`)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("characters", JSON.stringify(data));
        setTemplate(createTemplate(data));
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">{template}</div>
      </div>
      <CharacterDetail
        character={detail}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </div>
  );
}
