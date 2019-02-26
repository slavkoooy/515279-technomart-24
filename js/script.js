let feedbackPopup = document.querySelector('.feedback-popup-container');
let feedbackForm = feedbackPopup.querySelector('.feedback-popup');
let feedbackPopupShowButton = document.querySelector('.contacts-button');
let  feedbackPopupCloseButton = feedbackPopup.querySelector('.button-close');
let mapPopup = document.querySelector('.map-popup-container');
let mapPopupShowButton = document.querySelector('.map-button');
let mapPopupCloseButton = mapPopup.querySelector('.button-close');
let addItemPopup = document.querySelector('.add-item-popup');
let addItemShowButton = document.querySelectorAll('.buy-item-button');
let addItemCloseButton = addItemPopup.querySelector('.button-close');

let username = feedbackPopup.querySelector('[name = username]');
let email = feedbackPopup.querySelector('[name = email]');

let isStorageSupport = true;
let storage = '';

mapPopupShowButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('popup-show');
});

mapPopupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('popup-show');
});

try {
  storage = localStorage.getItem('username');
} catch (err) {
  isStorageSupport = false;
}

feedbackPopupShowButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('popup-show');
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

feedbackPopupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('popup-show');
  feedbackPopup.classList.remove('popup-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('popup-show')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('popup-show');
    }
  }
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains('popup-error')) {
      feedbackPopup.classList.remove('popup-error');
    }
    feedbackPopup.classList.add('popup-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
    }
  }
});

for (let i = 0; i < addItemShowButton.length; i++){
  addItemShowButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    addItemPopup.classList.add('popup-show');
  });
}

addItemCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addItemPopup.classList.remove('popup-show');
});





