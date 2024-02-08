// console.log(document);
// console.dir(document);
// console.log(document.forms);
// console.log(document.forms.root-form);//error
// console.log(document.forms['root-form']);

// console.dir(document.forms.rootForm);
// const form1 = document.getElementById('rootForm');
// const form2 = document.forms['rootForm'];
// const form3 = document.forms.rootForm;
// console.log(form1);
// console.log(form2);
// console.log(form3);

// const [link] = document.links;
// link.addEventListener('click', (e) => {
//   e.preventDefault();
// })

// const form = document.forms.rootForm;
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // console.log(e);
//   // console.dir(e.target);
//   // console.dir(e.target.elements);
//   // console.dir(e.target.elements.fullName);
//   // console.dir(e.target.elements['login']);
//   console.dir(e.target.elements.fullName.defaultValue);
//   console.dir(e.target.elements.fullName.value);
// });

// const fullName = document.forms.rootForm.fullName;
// console.log(fullName);
// console.dir(fullName);

//TODO 1 при нажатии на send добавлять значение из инпута в массив
//TODO 2 при нажатии на кнопку show отобразить значения массива в консоль
//TODO 3 только в том случае, если оно не пустое
//TODO 4 добавить очистку поля input после сохранения данных
//TODO 5 рендерить в список(ul) все сообщения из массива
const messages = [];
const form = document.forms.rootForm;
const btnShow = document.getElementById('showArray');
const listName = document.getElementById('listName');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = e.target.elements.fullName.value.trim();
  if (value) {
    messages.push(value);
    const li = document.createElement('li');
    li.innerText = value;
    listName.append(li);
  }
  e.target.reset();
});

btnShow.addEventListener('click', () => {
  console.log(messages);
})


