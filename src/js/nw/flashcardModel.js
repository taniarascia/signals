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
          description = "Proceed at authorized speed.";
          break;

        case "approach diverging":
          description = "Proceed preparing to take diverging route beyond next signal at authorized speed.";
          break;

        case "advance approach":
          description = "proceed preparing to stop at second signal.";
          break;

        case "diverging clear":
          description = "Proceed through diverging route, observing authorize speed through turnout(s) or crossover(s).";
          break;

        case "diverging approach diverging":
          description = "Proceed through turnout(s) or crossover(s) at authorized speed preparing to take diverging route beyond next signal at authorized speed.";
          break;

        case "approach":
          description = "Proceed preparing to stop at next signal. Train or engine exceeding Medium Speed must at once reduce to that speed.";
          break;

        case "diverging approach":
          description = "Proceed through diverging route, observing authorize speed through turnout(s) or crossover(s), preparing to stop at next signal. Train or engine exceeding Medium Speed must at once reduce to that speed.";
          break;

        case "slow clear":
          description = "Proceed; Slow Speed within controlled point/interlocking limits or through turnout(s) or crossover(s).";
          break;

        case "slow approach":
          description = "Proceed preparing to stop at next signal; Slow Speed within controlled point/interlocking limits or through turnout(s) or crossover(s).";
          break;

        case "restricting":
          description = "Proceed at Restricted Speed. Restricted Speed must be observed until the leading end of the movement reaches the next signal. ";
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