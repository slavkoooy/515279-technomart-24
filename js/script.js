let feedbackPopup = document.querySelector('.feedback-popup-container');
if (feedbackPopup) {
  let feedbackForm = feedbackPopup.querySelector('.feedback-popup');
  let feedbackPopupShowButton = document.querySelector('.contacts-button');
  let feedbackPopupCloseButton = feedbackPopup.querySelector('.button-close');
  let username = feedbackPopup.querySelector('[name = username]');
  let email = feedbackPopup.querySelector('[name = email]');
  let isStorageSupport = true;
  let storage = '';

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
}

let mapPopup = document.querySelector('.map-popup-container');
if (mapPopup) {
  let mapPopupShowButton = document.querySelector('.map-button');
  let mapPopupCloseButton = mapPopup.querySelector('.button-close');

  mapPopupShowButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('popup-show');
  });

  mapPopupCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('popup-show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('popup-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('popup-show');
    }
  }
});

let addItemPopup = document.querySelector('.add-item-popup');
let basketButton = document.querySelector('.header-basket');
let basketCount = document.querySelector('.basket-count');
let addItemShowButton = document.querySelectorAll('.buy-item-button');
let addItemCloseButton = addItemPopup.querySelector('.button-close');
let continueShoppingButton = addItemPopup.querySelector('.button-continue');

for (let i = 0; i < addItemShowButton.length; i++) {
  addItemShowButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    addItemPopup.classList.add('popup-show');
    addItemPopup.querySelector('.button-checkout').focus();
    basketButton.classList.add('header-basket-full');
    basketCount.textContent++;
  });
}

addItemCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addItemPopup.classList.remove('popup-show');
});

continueShoppingButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addItemPopup.classList.remove('popup-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (addItemPopup.classList.contains('popup-show')) {
      evt.preventDefault();
      addItemPopup.classList.remove('popup-show');
    }
  }
});