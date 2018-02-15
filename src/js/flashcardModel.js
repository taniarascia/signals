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
    if (action != 'back') {
      this.orderArray.push(number);
    }
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
          description = "Proceed prepared to pass next signal not exceeding 60 MPH and be prepared to enter diverging route at prescribed speed.";
          break;

        case "advance approach":
          description = "Proceed prepared to pass next signal not exceeding 50 MPH and be prepared to enter diverging route at prescribed speed.";
          break;

        case "approach medium":
          description = "Proceed prepared to pass next signal not exceeding 40 MPH and be prepared to enter diverging route at prescribed speed.";
          break;

        case "approach restricting":
          description = "Proceed prepared to pass next signal at restricted speed.";
          break;

        case "approach":
          description = "Proceed prepared to stop at next signal. Trains exceeding 30 MPH immediately reduce to that speed. (Note: Speed is 40 MPH for passenger trains).";
          break;

        case "diverging clear":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout.";
          break;

        case "diverging approach diverging":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout prepared to advance on diverging route at the next signal not exceeding prescribed speed through turnout.";
          break;

        case "diverging approach medium":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout prepared to pass next signal not exceeding 35 MPH.";
          break;

        case "diverging approach":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout; approach next signal prepared to stop. Trains exceeding 30 MPH immediately reduce to that speed. (Note: Speed is 40 MPH for passenger trains.)";
          break;

        case "restricting":
          description = "Proceed at restricted speed.";
          break;

        case "stop":
          description = "Stop.";
          break;

        default:
          break;
      }

      const top = card.top;
      const middle = card.middle;
      const bottom = card.bottom;
      const plate = card.plate;
      const name = card.name.toUpperCase();

      $('.circle').removeClass('green red yellow none dark lunar flashing');
      $('.plate').removeClass('yes-plate no-plate');
      $('.top').addClass(top);
      $('.middle').addClass(middle);
      $('.bottom').addClass(bottom);
      if (plate) {
        $('.plate').addClass('yes-plate');
      }
      $('.answer').html(
        `<h1 class="name">${name}</h1>
        <p>${description}</p>`
      ).hide();
    }

    if (action === 'back') {
      if (this.orderArray.length > 1) {
        this.orderArray.pop();
        const previousIndex = this.orderArray[this.orderArray.length - 1];
        setQandA(previousIndex);
      } else {
        $('.back').hide();
      }

    } else {
      setQandA(this.randomIndex);
      $('.back').show();
    }

    return Promise.resolve(true);
  }
}

const model = new FlashcardModel();

export default model;