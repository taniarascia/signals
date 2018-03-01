import {
  flashcardContent
} from './flashcardContent.js';

class FlashcardModel {
  constructor() {
    this.randomIndex = 0;
    this.orderArray = [];
  }

  generateRandomNum() {
    const number = Math.floor((Math.random() * flashcardContent.length));
    this.randomIndex = number;
    return Promise.resolve(number);
  }

  addIndexToOrderArray(number, action) {
    this.orderArray.push(number);
    return Promise.resolve(true);
  }

  attachContentToDOM(action) {
    const setQandA = index => {
      let description;
      const card = flashcardContent[index];

      switch (card.name) {
        case "clear":
          description = "Proceed.";
          break;

        case "advance approach":
          description = "Proceed prepared to stop at second signal.";
          break;

        case "approach":
          description = "Proceed prepared to stop at next signal.";
          break;

        case "approach restricting":
          description = "Proceed prepared to pass next signal at restricted speed.";
          break;

        case "advance approach diverging":
          description = "Proceed prepared to enter diverging route at second signal at proscribed speed.";
          break;

        case "approach diverging":
          description = "Proceed, prepare to enter diverging route at next signal at prescribed speed. Proceed prepared to stop at next signal.";
          break;

        case "diverging clear":
          description = "Proceed on diverging route at prescribed speed.";
          break;

        case "diverging clear approach diverging":
          description = "Proceed on diverging route at prescribed speed prepared to enter diverging route at next signal at prescribed speed. Proceed prepared to stop at second signal.";
          break;

        case "diverging advance approach":
          description = "Proceed on diverging route at prescribed speed prepared to stop at second signal.";
          break;

        case "diverging approach":
          description = "Proceed on diverging route at prescribed speed prepared to stop at next signal.";
          break;

        case "diverging approach restricting":
          description = "Proceed on diverging route at prescribed speed prepared to pass next signal at restricted speed.";
          break;

        case "restricting":
          description = "Proceed at restricted speed. ";
          break;

        case "restricting proceed":
          description = "Proceed at restricted speed.";
          break;

        case "stop":
          description = "Stop.";
          break;

        default:
          description = "";  
          break;
      }

      const top = card.top;
      const middle = card.middle;
      const bottom = card.bottom;
      const plate = card.plate;
      const c_plate = card.c_plate;
      const name = card.name.toUpperCase();

      $('.circle').removeClass('green red yellow none dark lunar flashing');
      $('.plate').removeClass('yes-plate');
      $('.c-plate').removeClass('yes-c-plate');
      $('.top').addClass(top);
      $('.middle').addClass(middle);
      $('.bottom').addClass(bottom);

      if (plate) {
        $('.plate').addClass('yes-plate');
      }
      if (c_plate) {
        $('.c-plate').addClass('yes-c-plate');
      }
      
      $('.answer').html(
        `<h1 class="name">${name}</h1>
        <p>${description}</p>`
      ).hide();
    }

    setQandA(this.randomIndex);

    return Promise.resolve(true);
  }
}

const model = new FlashcardModel();

export default model;