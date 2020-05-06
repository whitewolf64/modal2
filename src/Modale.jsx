import React from "react";
import "./App.css";
import fightclub from "./img/fightclub.jpg";

const Modale = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <div className="overlay" />

      <div className="wrapper">
        <div className="modal">
          <button type="button" className="close" onClick={cache}>
            <span>&times;</span>
          </button>
          <img className="logo" src={fightclub} alt="the affich" />
          <p>First rule of pastek movie never speak of pastekmovie</p>
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default Modale;
