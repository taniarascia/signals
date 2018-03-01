console.log("UP Version 2.0");

import controller from "./up/flashcardController.js";
import model from './up/flashcardModel.js';
import view from './up/flashcardView.js';

controller.render(model);