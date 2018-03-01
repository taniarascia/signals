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

        case "approach clear sixty":
          description = "Proceed. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 60 mph. When the signal governs the approach to a control point with a 60 mph turnout speed be prepared to advance on diverging route.";
          break;

        case "approach clear fifty":
          description = "Proceed. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 50MPH. When the signal governs the approach to a control point with a 50MPH turnout speed be prepared to advance on diverging route.";
          break;

        case "advance approach":
          description = "Proceed prepared to stop at second signal. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 40 MPH. When the signal governs the approach to a control point with a 40 MPH turnout speed be prepared to advance on diverging route.";
          break;

        case "advance approach passenger":
          description = "Proceed prepared to stop at second signal. Passenger trains may proceed, but must be prepared to pass next signal not exceeding 60 mph.";
          break;

        case "approach diverging":
          description = "Proceed prepared to advance on diverging route at next signal at prescribed speed through turnout.";
          break;

        case "approach":
          description = "Proceed prepared to stop before any part of the train or engine passes the next signal. Passenger trains exceeding 40 MPH must immediately reduce to 40 MPH.";
          break;

        case "approach restricting":
          description = "Proceed prepared to pass next signal at restricted speed, but not exceeding 15 MPH.";
          break;

        case "diverging clear limited":
          description = "Proceed on diverging route. Speed through turnout must not exceed 40 MPH.";
          break;

        case "diverging clear":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout.";
          break;

        case "diverging advance approach":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout and be prepared to stop at second signal. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 40 MPH. When the signal governs the approach to a control point with a 40 MPH turnout, be prepared to advance on normal or diverging route.";
          break;

        case "diverging advance approach passenger":
          description = "Proceed on diverging route at prescribed speed through turnout prepared to stop at second signal. Passenger trains exceeding 60 MPH must immediately reduce to 60 MPH.";
          break;

        case "diverging approach":
          description = "Proceed on diverging route at prescribed speed through turnout prepared to stop before any part of train or engine passes the next signal. Passenger trains exceeding 40 MPH must immediately reduce to 40 MPH.";
          break;

        case "diverging approach diverging":
          description = "Proceed on diverging route not exceeding prescribed speed through turnout prepared to advance on the diverging route at the next signal at prescribed speed through turnout.";
          break;

        case "restricting":
          description = "Proceed at restricted speed, not exceeding prescribed speed through turnout when applicable.";
          break;

        case "restricted proceed":
          description = "Proceed at restricted speed.";
          break;

        case "stop":
          description = "Stop before any part of train or engine passes signal.";
          break;

        case "diverging approach clear fifty":
          description = "Proceed on diverging route at prescribed speed through turnout. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 50MPH. When the signal governs the approach to a control point with a 50MPH turnout, be prepared to advance on diverging route.";
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