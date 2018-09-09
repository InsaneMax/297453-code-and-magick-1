'use strict';

var firstNames = [
  'Иван ',
  'Хуан Себастьян ',
  'Мария ',
  'Кристоф ',
  'Виктор ',
  'Юлия ',
  'Люпита ',
  'Вашингтон '
];

var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardContainer = document.querySelector('.setup-similar');
similarWizardContainer.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');

var getRandomElemFromArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function getRandomWizard(numberOfWizards) {
  var randomWizards = [];

  for (var i = 0; i < numberOfWizards; i++) {
    randomWizards.push({
      name: getRandomElemFromArray(firstNames) + getRandomElemFromArray(lastNames),
      coatColor: getRandomElemFromArray(coatColors),
      eyesColors: getRandomElemFromArray(eyesColors)
    });
  }
  return randomWizards;
}

var wizards = getRandomWizard(4);

var fragment = document.createDocumentFragment();

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;
  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  similarList.appendChild(createWizardElement(wizards[i]));
}
