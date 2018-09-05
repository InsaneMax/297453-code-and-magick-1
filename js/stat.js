'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_WIDTH = 80;
var barY = CLOUD_HEIGHT - GAP * 4 - FONT_GAP * 3;


function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x - GAP, y - GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderText(ctx, font, color, text1, text2) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text1, CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2);
  ctx.fillText(text2, CLOUD_X + GAP * 4, CLOUD_Y + FONT_GAP + GAP * 3);
}

//начало функции, которую я не понял)

function renderColumn(name, time, height) {

}

function getMaxOfArray(nameOfArray) {
  return Math.max.apply(null, nameOfArray);
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function getRandomBlue() {
  return 'rgb(' + '0, 0, ' + randomNumber() + ')';
}

window.renderStatistics = function (ctx, names, times) {
  var maxValue = getMaxOfArray(times);

  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderText(ctx, '16px PT Mono', '#000000', 'Ура вы победили!', 'Список результатов:')

  for (var i = 0; i < names.length; i++) {

    times[i] = Math.floor(times[i]);
    ctx.fillStyle = getRandomBlue();
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillText(names[i], CLOUD_X + GAP * 3 + (TEXT_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP * 3 + (BAR_WIDTH + BAR_GAP) * i, (GAP * 3) + FONT_GAP * 2 + barY, BAR_WIDTH, BAR_HEIGHT * times[i] * -1 / maxValue);
    ctx.fillText(times[i], CLOUD_X + GAP * 3 + (TEXT_WIDTH + GAP) * i, (BAR_HEIGHT * times[i] * -1 / maxValue) + barY + FONT_GAP * 2 + GAP * 2);
  }
};
