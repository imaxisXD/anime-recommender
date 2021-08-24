import React, { useState } from "react";
import "./styles.css";

const animeDatabase = {
  "Action 🥊": [
    { Name: "Bleach", Rating: "5/5", Age: "18+" },
    { Name: "Dragon Ball Z", Rating: "4/5", Age: "16+" },
    { Name: "Naruto Series", Rating: "4.5/5", Age: "18+" },
    { Name: "Ben 10", Rating: "3/5", Age: "13+" }
  ],
  "Thriller 😬": [
    { Name: "Code Geass", Rating: "5/5", Age: "18+" },
    { Name: "Death Note", Rating: "4.7/5", Age: "18+" }
  ],
  "Romantic 💕": [
    { Name: "Your Name", Rating: "5/5", Age: "13+" },
    { Name: "Silent Voice", Rating: "5/5", Age: "13+" },
    { Name: "Weathering With You", Rating: "4/5", Age: "13+" }
  ],
  "Must Watch 🔥": [
    { Name: "Attack On Titans", Rating: "5/5", Age: "18+" },
    { Name: "Code Geass", Rating: "5/5", Age: "18+" },
    { Name: "Bunny Girl Senpai", Rating: "5.5/5", Age: "17+" }
  ]
};
const animeGenre = Object.keys(animeDatabase);

export default function App() {
  const [animeCategory, setAnimeCategory] = useState("Action 🥊");

  function genreClickHandler(event) {
    let selctedGenre = event.target.textContent;
    setAnimeCategory(selctedGenre);
  }

  return (
    <div className="App">
      <h1>Anime Recommender 🎬</h1>
      <p>Let me recommend you some good anime </p>
      <div>
        {animeGenre.map((genre) => {
          return <button onClick={genreClickHandler}>{genre}</button>;
        })}
      </div>
      <hr />
      <div>
        <ul>
          {animeDatabase[animeCategory].map((anime) => {
            return (
              <li>
                <div>Name : {anime.Name}</div>
                <div>Rating : {anime.Rating}</div>
                <div>Min Age : {anime.Age}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
