let indexNow = 0;
const reviewCard = document.getElementsByClassName('review-card')[0];
const cardPosition = document.getElementsByClassName('card-position')[0];
const positionArr = [];
for (let i = 0; i < persons.length; i++) {
  positionArr.push(createElement('div', { classNames: ['position'] }));
  cardPosition.append(positionArr[i]);
}
for (let i = 0; i < positionArr.length; i++) {
  if (i === 0) {
    positionArr[i].style.background = '#65C466';
    continue;
  }
  positionArr[i].style.background = '#E8E2D5';
}

function createCardByIndex(index) {

  document.getElementsByClassName("review-inside")[0]?.remove()
  const reviewInside = createElement('section', { classNames: ['review-inside'] });
  const starContainer = createElement('div', { classNames: ['star-container'] });
  for (let i = 0; i < persons[index].starQuantity; i++) {
    const star = createElement('img', { classNames: ['star-image'] });
    star.setAttribute('src', './images/star.svg');
    star.setAttribute('alt', `star-${(i + 1)}`);
    starContainer.append(star);
  }
  reviewInside.append(starContainer);

  const reviewDescribe = createElement('div', { classNames: ['review-describe'] });
  reviewDescribe.innerText = persons[index].reviewDescribe;
  reviewInside.append(reviewDescribe);

  const person = createElement('div', { classNames: ['person'] });
  const personAvatar = createElement('img', { classNames: ['person-avatar'] });
  personAvatar.setAttribute('src', persons[index].profilePicture);
  personAvatar.setAttribute('alt', persons[index].foolName);
  person.append(personAvatar);
  const personDescribe = createElement('div', { classNames: ['person-describe'] });
  const personFullname = createElement('div', { classNames: ['person-fullname'] });
  personFullname.innerText = persons[index].foolName;
  personDescribe.append(personFullname);
  const personCompany = createElement('div', { classNames: ['person-company'] });
  personCompany.innerText = persons[index].company;
  personDescribe.append(personCompany);
  person.append(personDescribe);
  reviewInside.append(person);
  reviewCard.append(reviewInside);
}
function resetPositionExceptIndex(index) {
  for (let i = 0; i < positionArr.length; i++) {
    if (i === index) {
      positionArr[i].style.background = '#65C466';
      continue;
    }
    positionArr[i].style.background = '#E8E2D5';
  }
}

createCardByIndex(0);
//debugger
const leftBtn = document.getElementsByClassName('leftBtn')[0];
const rightBtn = document.getElementsByClassName('rightBtn')[0];
leftBtn.addEventListener('click', () => {
  //debugger
  if (indexNow > 0) {
    indexNow--;
    createCardByIndex(indexNow);
    resetPositionExceptIndex(indexNow);
  } else {
    indexNow = persons.length - 1;
    createCardByIndex(indexNow);
    resetPositionExceptIndex(indexNow);
  }
});
rightBtn.addEventListener('click', () => {
  //debugger
  if (indexNow < persons.length - 1) {
    indexNow++;
    createCardByIndex(indexNow);
    resetPositionExceptIndex(indexNow);
  } else {
    indexNow = 0;
    createCardByIndex(indexNow);
    resetPositionExceptIndex(indexNow);
  }
});

function createElement(tag, { classNames, click }, ...children) {
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  element.i
  element.addEventListener('click', click);
  element.append(...children);
  return element;
}

