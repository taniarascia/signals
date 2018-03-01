console.log("CN Version 2.0");

import controller from "./cn/flashcardController.js";
import model from './cn/flashcardModel.js';
import view from './cn/flashcardView.js';

controller.render(model);