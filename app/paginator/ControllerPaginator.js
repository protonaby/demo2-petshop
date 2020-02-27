import {ViewPaginator} from './ViewPaginator.js';

export class ControllerPaginator {

    constructor({subscribe, notify}) {
        this.view = new ViewPaginator(this.clickNextBtn.bind(this), this.clickPrevBtn.bind(this));
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('cards-loaded', this.updatePaginator.bind(this));
    }

    clickNextBtn() {
        this.notify('click-next');
    }

    clickPrevBtn() {
        this.notify('click-prev');
    }

    updatePaginator({currentPage, totalPages}) {
        this.view.updatePaginator(currentPage, totalPages);
    }

}
