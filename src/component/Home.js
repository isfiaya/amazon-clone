import React from "react";
import "./Home.scss";
import books from "../assets/books1.jpg";
import Product from "./Product";
import homeImage from "../assets/home.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homeImage} alt="homeImage" className="home__image" />

        <div className="home__row">
          <Product rating={5} price={20} id={1111} image={books} title="the Lean Startupthe Lean Startupthe Lean Startupthe Lean Startupthe Lean
        Startu pSt artu ptheStar tupt heStartuptheStartupthe"/>
          <Product rating={4} price={20} id={2222} image='https://m.media-amazon.com/images/I/8104pL+jyNL._AC_SX466_.jpg' title="
Amazon Basics 36 Pack AAA High-Performance"/>

        </div>
        <div className="home__row">
          <Product rating={5} price={26} id={3333} image='https://m.media-amazon.com/images/I/5197gPgZsuL._AC_SY1000_.jpg' title="Energizer MAX AA Batteries & AAA Batteries Combo Pack, 24 Double AA Batteries and 24 Triple AAA Batteries (48 Count)" />
          <Product rating={5} price={20} id={4444} image='https://m.media-amazon.com/images/I/81nQV4DwBqL._AC_UY1000_.jpg' title="the Lean Startupthe Lean Startupthe Lean Startupthe Lean Startupthe Lean
        Startu pSt artu ptheStar tupt heStartuptheStartupthe"/>
          <Product rating={5} price={20} id={5555} image='https://m.media-amazon.com/images/I/71Y880dTvhL._AC_UY1000_.jpg' title="the Lean Startupthe Lean Startupthe Lean Startupthe Lean Startupthe Lean
        Startu pSt artu ptheStar tupt heStartuptheStartupthe"/>
        </div>
        <div className="home__row">
          <Product rating={5} price={20} id={6666} image='https://m.media-amazon.com/images/I/91AFoBouYjL._AC_UY1000_.jpg' title="the Lean Startupthe Lean Startupthe Lean Startupthe Lean Startupthe Lean
        Startu pSt artu ptheStar tupt heStartuptheStartupthe"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
