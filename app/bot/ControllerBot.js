import {TemplateBot} from './TemplateBot.js';

export class ControllerBot {

    constructor({subscribe, notify}) {
        // this.chatId = -376016381;
        this.chatId = -377489566;
        this.apiKey = '916202565:AAHUqbSIas5e8V2Tfu0CxUGooiUkUOGTTPU';
        this.subscribe = subscribe;
        this.subscribe('order-submitted', this.sendTlgMsg.bind(this));
    }

    sendTlgMsg({pets, order}) {
        const msg = TemplateBot.getMsgTemplate(pets, order);
        fetch(`https://api.telegram.org/bot${this.apiKey}/sendMessage?chat_id=${this.chatId}&text=${encodeURIComponent(msg)}&parse_mode=MarkDown`);
    }
}


