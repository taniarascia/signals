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

        case "approach limited":
          description = "Proceed prepared to pass next signal not exceeding 60 mph and be prepared to enter diverging route at prescribed speed.";
          break;

        case "advance approach":
          description = "Proceed prepared to pass next signal not exceeding 50 mph and be prepared to enter diverging route at prescribed speed. ";
          break;

        case "approach medium":
          description = "Proceed prepared to pass next signal not exceeding 30 mph and be prepared to enter diverging route at prescribed speed.  (Note: Speed is 40 mph for passenger trains)";
          break;

        case "approach restricting":
          description = "Proceed prepared to pass next signal at restricted speed. ";
          break;

        case "approach":
          description = "Proceed prepared to stop at next signal. Trains exceeding 30MPH immediately reduce to that speed. (Note: Speed is 40 mph for passenger trains)";
          break;

        case "diverging clear":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout.";
          break;

        case "diverging approach diverging":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout prepared to advance on diverging route at the next signal not exceeding prescribed speed through turnout.";
          break;

        case "diverging approach medium":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout prepared to pass next signal not exceeding 35 MPH";
          break;

        case "diverging approach":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout; approach next signal prepared to stop. Trains exceeding 30MPH immediately reduce to that speed. (Note: Speed is 40 mph for passenger trains.)";
          break;

        case "restricting":
          description = "Proceed at restricted speed. ";
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