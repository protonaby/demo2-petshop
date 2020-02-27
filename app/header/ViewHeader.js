import {TemplateHeader} from './TemplateHeader.js';

export class ViewHeader {

    constructor(keyListener, categoryListener, cartListener, sortFunc) {
        this.renderMenu(sortFunc);
        this.addListeners(keyListener, categoryListener, cartListener);
        this.initDropdown(sortFunc);
    }

    renderMenu() {
        this.domHeader = document.querySelector('header');
        this.domHeader.innerHTML = TemplateHeader.getHeaderTemplate();
        this.inputSearch = document.querySelector('.searchInput');
        this.categoryBtns = document.querySelectorAll('.category');
        this.cartCount = document.querySelector('.petsInCart');
        this.cartBtn = document.querySelector('.cartBtn');
    }

    addListeners(searchFunc, categoryFunc, cartFunc) {
        this.inputSearch.addEventListener('keyup', () => {
            searchFunc();
        });
        this.categoryBtns.forEach(btn => btn.addEventListener('click', () => {
            this.setActiveCategoryBtn(btn);
            categoryFunc(btn.dataset.category);
        }));
        this.cartBtn.addEventListener('click', () => {
            cartFunc();
        });
    }

    initDropdown(sortFunc) {
        $('.dropdown')
            .dropdown({
                onChange: function (value, text) {
                    sortFunc(value);
                }
            });
    }

    get search() {
        return document.querySelector('.searchInput').value;
    }

    set search(value) {
        return document.querySelector('.searchInput').value = value;
    }

    resetCategoryBtns() {
        this.categoryBtns.forEach(e => e.classList.remove("active"));
    }

    setActiveCategoryBtn(btn) {
        this.categoryBtns.forEach(b => b.classList.remove("active"));
        if (!btn.classList.contains("brand"))
            btn.classList.add("active");
    }

    addItemToCart(numItems = 1) {
        this.cartCount.innerText = Number(this.cartCount.innerText) + numItems;
    }

    removeItemFromCart() {
        this.cartCount.innerText = Number(this.cartCount.innerText) - 1;
    }

    emptyCart() {
        this.cartCount.innerText = 0;
    }
}
