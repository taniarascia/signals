console.log("BNSF Version 2.0");

import controller from "./bnsf/flashcardController.js";
import model from './bnsf/flashcardModel.js';
import view from './bnsf/flashcardView.js';

controller.render(model);