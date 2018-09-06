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
var OFFSET_TEXT_Y = 15;
var OFFSET_Y = 90;

function getMaxOfArray(nameOfArray) {
  return Math.max.apply(null, nameOfArray);
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function getRandomBlue() {
  return 'rgb(' + '0, 0, ' + randomNumber() + ')';
}

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

function renderColumn(ctx, name, time, x, y, height) {
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }
  ctx.fillText(name, x, y - OFFSET_TEXT_Y);
  ctx.fillRect(x, y, BAR_WIDTH, height);
  ctx.fillText(time, x, y + height + OFFSET_TEXT_Y);
}

window.renderStatistics = function (ctx, names, times) {
  var maxValue = getMaxOfArray(times);

  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderText(ctx, '16px PT Mono', '#000000', 'Ура вы победили!', 'Список результатов:');

  for (var i = 0; i < names.length; i++) {
    var x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var height = times[i] / maxValue * BAR_HEIGHT;
    var y = OFFSET_Y + BAR_HEIGHT - height;
    var time = Math.floor(times[i]);
    var name = names[i];
    ctx.fillStyle = getRandomBlue();
    renderColumn(ctx, name, time, x, y, height);
  }
};
