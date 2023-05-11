import React, { useState } from "react";

function Search(props) {
  const { title } = props;
  const [charCards, setCharCards] = useState([]);

  const addCards = (userInput) => {
    const getData = async () => {
      const inputLowerCased = userInput.toLowerCase();
      const characterData = await fetchData();
      let count = 0;

      characterData.forEach((character) => {
        const charLowerCased = character.fullName.toLowerCase();
        const isMatch = charLowerCased.includes(inputLowerCased);

        if (isMatch && inputLowerCased !== "") {
          count += 1;
          const newCard = (
            <div className="col mt-2 mx-0" key={count}>
              <div className="pt-2 justify-content-center mx-auto char-card">
                <img
                  src={character.imageUrl}
                  alt={`Portrait of ${character.fullName}`}
                ></img>
                <h2 className="mt-3 fw-bold text-center mx-auto w-75 text-white">
                  {character.fullName}
                </h2>
              </div>
            </div>
          );
          setCharCards((previousCards) => [...previousCards, newCard]);
        }
      });

      if (count === 0) {
        const newCard = (
          <div key="0">
            <p className="text-danger">No Match Found</p>
          </div>
        );
        setCharCards((previousCards) => [...previousCards, newCard]);
      }
    };
    getData();
  };

  const clearCards = () => {
    setCharCards([]);
  };
  return (
    <section className="container w-100 h-75 mt-0 rounded-2 p-5 mx-auto bg-white pt-0 mt-0">
      <h1 className="mb-4">{title}</h1>
      <input
        className="mb-3"
        aria-label="Search for a Game of Thrones Character by typing their name and hitting enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const userInput = e.target.value;
            clearCards();
            addCards(userInput);
          }
        }}
      ></input>
      <div className="row" id="imageContainer">
        {charCards}
      </div>
    </section>
  );
}
export default Search;

async function fetchData() {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed", error);
  }
}

// Sources
// https://bobbyhadz.com/blog/react-push-to-state-array
// https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field
// https://react.dev/learn/responding-to-events
