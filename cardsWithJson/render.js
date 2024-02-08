const cardsList = document.getElementById('cards-list');
const promise = fetch('./home.json');//робыть запыт
promise
  .then(resp => resp.json())//+
  .then(actors => {

    const HTMLCards = actors
      .filter(({ firstName, lastName, profilePicture }) => firstName && lastName && profilePicture)
      .map((actor) => createCard(actor));
    cardsList.append(...HTMLCards);

    const liS = document.querySelectorAll('.card-wrapper');

    const list = document.getElementById('list');
    console.dir(list.children);
    for (const li of liS) {
      li.addEventListener('click', () => {
        if (canItAdd(list.children, li.childNodes[0].childNodes[1].innerText)) {
          const li2 = document.createElement('li');
          li2.classList.add('li-list');
          li2.innerText = li.childNodes[0].childNodes[1].innerText;
          li2.addEventListener('click', delElement)
          list.append(li2);
        }
      })
    }
  })
  .catch(error => console.log(error))//-

function createCard(actor) {
  return createElement('li', { classNames: ['card-wrapper'] },
    createElement('article', { classNames: ['card-container'] },
      createWrapper(actor),
      createElement('h2', {
        classNames: ['card-fullname'],
        click: () => console.log(actor.name)
      }, document.createTextNode(actor.firstName + ' ' + actor.lastName)),

      createContacts(actor)
    )
  );
}
function isAddContact(http, arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(http)) {
      return true;
    }
  }
  return false;
}
function searchContact(http, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(http)) {
      return arr[i];
    }
  }
}
function createA(icon, href) {
  const a1 = document.createElement('a');
  const circle1 = document.createElement('div');
  circle1.classList.add('circle');
  circle1.classList.add(icon);
  a1.setAttribute('href', href);
  a1.append(circle1)
  return a1;
}
function createContacts(actor) {

  const contacts = document.createElement('div');
  contacts.classList.add('contacts');
  if (isAddContact('https://www.facebook', actor.contacts)) {

    contacts.append(createA('icon-facebook-f', searchContact('https://www.facebook', actor.contacts)));
  }
  if (isAddContact('https://twitter', actor.contacts)) {
    contacts.append(createA('icon-twitter', searchContact('https://twitter', actor.contacts)));
  }
  if (isAddContact('https://www.instagram', actor.contacts)) {
    contacts.append(createA('icon-instagram', searchContact('https://www.instagram', actor.contacts)));
  }
  return contacts;
}

function createElement(tag, { classNames, click }, ...children) {
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  element.addEventListener('click', click);
  element.append(...children);
  return element;
}

function createWrapper(actor) {
  const divCardPhotoWrapper = document.createElement('div');
  divCardPhotoWrapper.classList.add('card-photo-wrapper');


  const cardThemeFhoto = document.createElement('div');
  cardThemeFhoto.classList.add('card-theme-fhoto');
  cardThemeFhoto.setAttribute('id', `wrapper-${actor.id}`);

  createImage(actor);
  divCardPhotoWrapper.append(cardThemeFhoto);

  return divCardPhotoWrapper;
}

function createImage(actor) {
  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.setAttribute('src', actor.profilePicture);
  img.setAttribute('alt', actor.Statham);
  img.dataset.idActor = `${actor.id}`;
  img.addEventListener('error', delElement);
  img.addEventListener('load', photoLoadHandler);

}

function delElement({ target }) {
  target.remove();
}

function photoLoadHandler({ target }) {//img
  const parent = document.getElementById(`wrapper-${target.dataset.idActor}`);
  parent.append(target);
}
function canItAdd(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (name === arr[i].innerText) {
      return false;
    }
  }
  return true;
}

