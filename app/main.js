import {Publisher} from './share/Publisher.js';
import {ControllerCards} from './cards/ControllerCards.js';
import {ControllerHeader} from './header/ControllerHeader.js';
import {ControllerPaginator} from './paginator/ControllerPaginator.js';
import {ControllerDetails} from './details/ControllerDetails.js';
import {ControllerCart} from "./cart/ControllerCart.js";
import {ControllerBot} from "./bot/ControllerBot.js";

const publisher = new Publisher();
const cards = new ControllerCards(publisher.methods).loadCards();
const header = new ControllerHeader(publisher.methods);
const paginator = new ControllerPaginator(publisher.methods);
const details = new ControllerDetails(publisher.methods);
const cart = new ControllerCart(publisher.methods);
const bot = new ControllerBot(publisher.methods);