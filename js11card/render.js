// console.log(actors);
const cardsList = document.getElementById('cards-list');
const HTMLCards = actors.map((actor) => createCard(actor));

function photoErrorHandler({ target }) {
  target.remove();
}
function stringToColour(str) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (var i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
function createCard(actor) {
  const li = document.createElement('li');
  li.classList.add('card-wrapper');

  const article = document.createElement('article');
  article.classList.add('card-container');

  const divCardPhotoWrapper = document.createElement('div');
  divCardPhotoWrapper.classList.add('card-photo-wrapper');

  const divCardInitials = document.createElement('div');
  divCardInitials.classList.add('card-initials');
  //color

  divCardInitials.style.backgroundColor = stringToColour(actor.name);
  //divCardInitials.setAttribute('background-color', )
  if (actor.name !== "") {
    const FL = actor.name.split(" ");
    divCardInitials.append(document.createTextNode(FL[0][0] + FL[1][0]));/* home work*/

  }
  else {
    divCardInitials.append(document.createTextNode('Unknown'));
  }

  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.setAttribute('src', actor.photo);
  img.setAttribute('alt', actor.name);
  img.addEventListener('error', photoErrorHandler);

  divCardPhotoWrapper.append(divCardInitials, img);

  const h2 = document.createElement('h2');
  h2.classList.add('card-fullname');
  if (actor.name !== "") {
    h2.append(document.createTextNode(actor.name));
  }
  else{
    h2.append(document.createTextNode('Unknown'));
  }


  const p = document.createElement('p');
  p.classList.add('card-description');
  p.append(document.createTextNode(actor.birthdate))

  article.append(divCardPhotoWrapper, h2, p);
  li.append(article);
  return li;
}

cardsList.append(...HTMLCards);