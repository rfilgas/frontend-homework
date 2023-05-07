// GET api/characters
// [
//     {
//       "id": 0,
//       "firstName": "string",
//       "lastName": "string",
//       "fullName": "string",
//       "title": "string",
//       "family": "string",
//       "image": "string",
//       "imageUrl": "string"
//     }
//   ]

async function addCharacters(characters) {
  characters.forEach((character) => {
    const img = document.createElement('img');
    img.src = character.imageUrl;
    Object.assign(img.style, { width: '175px', height: '200px' });
    img.alt = `Portrait of ${character.fullName}`;

    const personName = document.createElement('h2');
    personName.textContent = character.fullName;
    personName.className = 'mt-3 fw-bold text-center mx-auto w-75';
    personName.style.fontSize = '24px';

    const personTitle = document.createElement('h3');
    personTitle.textContent = character.title;
    personTitle.className = 'mt-1 fw-bold text-center mx-auto w-100';
    personTitle.style.fontSize = '16px';

    const characterCard = document.createElement('div');
    characterCard.className = 'pt-2 justify-content-center mx-auto';
    Object.assign(characterCard.style, {
      textAlign: 'center',
      width: '190px',
      height: '330px',
      margin: '0px',
      padding: '0px',
    });
    characterCard.append(img, personName, personTitle);

    // Hover Behavior
    characterCard.addEventListener('mouseenter', () => characterCard.style.setProperty('background-color', '#01435B'));
    characterCard.addEventListener('mouseleave', () => characterCard.style.removeProperty('background-color'));
    characterCard.addEventListener('mouseenter', () => personName.style.setProperty('color', 'white'));
    characterCard.addEventListener('mouseleave', () => personName.style.removeProperty('color'));
    characterCard.addEventListener('mouseenter', () => personTitle.style.setProperty('color', 'white'));
    characterCard.addEventListener('mouseleave', () => personTitle.style.removeProperty('color'));

    // Column
    const column = document.createElement('div');
    column.appendChild(characterCard);
    column.className = 'col mt-2 mx-0';
    column.style.justifyContent = 'space-between';
    column.style.paddingLeft = '0px';
    column.style.paddingRight = '0px';

    const toInsert = document.getElementById('imageContainer');
    toInsert.appendChild(column);
  });
}

function fetchData(callback) {
  const url = 'https://thronesapi.com/api/v2/Characters';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error('Fetch Failed', error);
    });
}

fetchData(addCharacters);

// Sources:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://thronesapi.com
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
