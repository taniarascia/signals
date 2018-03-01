console.log("NW Version 2.0");

import controller from "./nw/flashcardController.js";
import model from './nw/flashcardModel.js';
import view from './nw/flashcardView.js';

controller.render(model);