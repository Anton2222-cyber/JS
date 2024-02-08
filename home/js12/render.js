const cardsList = document.getElementById('cards-list');
const HTMLCards = actors
  .filter(({ name, photo }) => name && photo)
  .map((actor) => createCard(actor));

function createCard(actor) {
  return createElement('li', { classNames: ['card-wrapper'] },
    createElement('article', { classNames: ['card-container'] },
      createWrapper(actor),
      createElement('h2', {
        classNames: ['card-fullname'],
        click: () => console.log(actor.name)
      },
        document.createTextNode(actor.name)),
      createElement('p', { classNames: ['card-description'] },
        document.createTextNode(actor.birthdate))
    )
  );
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
  divCardPhotoWrapper.setAttribute('id', `wrapper-${actor.id}`);

  const divCardInitials = document.createElement('div');
  divCardInitials.classList.add('card-initials');
  divCardInitials.append(document.createTextNode(actor.name[0]));

  createImage(actor);
  divCardPhotoWrapper.append(divCardInitials);

  return divCardPhotoWrapper;
}

function createImage(actor) {
  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.setAttribute('src', actor.photo);
  img.setAttribute('alt', actor.name);
  img.dataset.idActor = `${actor.id}`;
  img.addEventListener('error', photoErrorHandler);
  img.addEventListener('load', photoLoadHandler);

}

function photoErrorHandler({ target }) {
  target.remove();
}

function photoLoadHandler({ target }) {//img
  const parent = document.getElementById(`wrapper-${target.dataset.idActor}`);
  parent.append(target);
}

cardsList.append(...HTMLCards);