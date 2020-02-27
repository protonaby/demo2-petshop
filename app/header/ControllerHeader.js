import {ViewHeader} from './ViewHeader.js';

export class ControllerHeader {

    constructor({subscribe, notify}) {
        this.view = new ViewHeader(this.keyUpInSearchInput.bind(this), this.clickCategory.bind(this),
            this.clickCart.bind(this), this.clickSort.bind(this));
        this.notify = notify;
        this.subscribe = subscribe;
        this.subscribe('click-buy-pet', this.handleBuyPet.bind(this));
        this.subscribe('click-cancel-buy-pet', this.handleCancelBuyPet.bind(this));
        this.subscribe('empty-cart', this.handleEmptyCart.bind(this));
        this.loadCartCountFromStorage();
    }

    keyUpInSearchInput() {
        this.notify('new-search', this.view.search);
    }

    clickCategory(category) {
        this.notify('click-category', category);
    }

    clickCart() {
        this.notify('click-cart');
    }

    clickSort(value) {
        this.notify('sort', value);
    }

    handleBuyPet() {
        this.view.addItemToCart();
    }

    handleCancelBuyPet() {
        this.view.removeItemFromCart();
    }

    handleEmptyCart() {
        this.view.emptyCart();
    }

    loadCartCountFromStorage() {
        let petsInStorage = JSON.parse(sessionStorage.getItem('cart-storage')) || [];
        this.view.addItemToCart(petsInStorage.length);
    }
}
