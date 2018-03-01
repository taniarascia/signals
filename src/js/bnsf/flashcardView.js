import controller from "./flashcardController.js";
import model from './flashcardModel.js';

$('.show-answer').on('click', () => {
  $('.answer').show();
});

$('.next').on('click', () => {
  const action = "next";
  controller.render(model, action);
});

$(document).keypress(function (e) {
  console.log(e.which);
  if (e.which == 115) {
    $('.answer').show();
  }
  if (e.which == 100) {
    const action = "next";
    controller.render(model, action);
  }
});