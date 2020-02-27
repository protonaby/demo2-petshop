import {ModelCards} from './ModelCards.js';
import {ViewCards} from './ViewCards.js';

export class ControllerCards {

    constructor({subscribe, notify}) {
        this.model = new ModelCards();
        this.view = new ViewCards();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('new-search', this.loadCardsBySearch.bind(this));
        this.subscribe('click-prev', this.loadPrevPage.bind(this));
        this.subscribe('click-next', this.loadNextPage.bind(this));
        this.subscribe('click-category', this.loadCardsByCategory.bind(this));
        this.subscribe('pet-updated', this.handlePetUpdated.bind(this));
        this.subscribe('empty-cart', this.handleEmptyCart.bind(this));
        this.subscribe('sort', this.loadCardsWithSort.bind(this));
        this.currentPage = 0;
        this.pageSize = 10;
        this.search = "";
        this.category = "";
        this.sort = "";
    }

    get totalPages() {
        return Math.ceil(this.model.totalPets / this.pageSize);
    }

    loadCards() {
        this.model.loadPets().then(() => {
            this.renderCards();
        });
        return this;
    }

    loadNextPage() {
        if (this.currentPage > this.totalPages - 2) return;
        this.currentPage++;
        this.renderCards();
    }

    loadPrevPage() {
        if (this.currentPage < 1) return;
        this.currentPage--;
        this.renderCards();
    }

    loadCardsBySearch(search) {
        this.currentPage = 0;
        this.search = search;
        this.renderCards();
    }

    loadCardsByCategory(category) {
        this.currentPage = 0;
        this.category = category;
        this.renderCards();
    }

    loadCardsWithSort(sort) {
        this.currentPage = 0;
        this.sort = sort;
        this.renderCards();
    }

    renderCards() {
        const pets = this.model.getPetsByCount(this.currentPage * this.pageSize, this.pageSize, this.search, this.category, this.sort);
        this.view.renderPets(pets);
        this.addListeners();
        this.notify('cards-loaded', {currentPage: this.currentPage, totalPages: this.totalPages});
    }

    addListeners() {
        this.view.addDetailsListener(this.handleClickDetails.bind(this));
        this.view.addBuyPetListener(this.handleClickAddToCart.bind(this));
    }

    handleClickDetails(id) {
        this.notify('click-details', this.model.getPet(id));
    }

    handleClickAddToCart(id) {
        this.handlePetUpdated(id);
        if (this.model.isPetInCart(id)) {
            this.notify('click-buy-pet', this.model.getPet(id));
        } else {
            this.notify('click-cancel-buy-pet', this.model.getPet(id));
        }
    }

    handlePetUpdated(id) {
        this.model.togglePetInCart(id);
        this.view.toggleBuyPetBtn(id);
    }

    handleEmptyCart() {
        this.model.removeAllFromCart();
        this.renderCards();
    }
}
