/**
 * @returns {Object} quote information
 */
const fetchCharacter = async (characterId) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const data = await res.json();

  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const RickandmortyApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breaking Bad App";
  element.innerHTML = "Loading...";
  const characterName = document.createElement("h1");
  const characterStatus = document.createElement("h3");
  const nextCharacterButton = document.createElement("button");

  nextCharacterButton.innerHTML = "Next Character";

  const renderCharacter = async (character) => {
    characterName.innerHTML = character.name;
    characterStatus.innerHTML = character.status;
    element.replaceChildren(
      characterName,
      characterStatus,
      nextCharacterButton
    );
  };
  let characterId = 1;

  fetchCharacter(characterId).then(renderCharacter);

  nextCharacterButton.addEventListener("click", async () => {
    characterId++;
    nextCharacterButton.disabled = true;
    await fetchCharacter(characterId).then(renderCharacter);
    nextCharacterButton.disabled = false;
  });
};
