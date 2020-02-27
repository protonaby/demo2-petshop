import {TemplatePaginator} from './TemplatePaginator.js';

export class ViewPaginator {
    constructor(clickNextListener, clickPrevListener) {
        this.domNav = document.querySelectorAll('.paginator');
        this.renderPaginator();
        this.addListeners(clickNextListener, clickPrevListener);
    }

    addListeners(clickNextFunc, clickPrevFunc) {
        this.btnsNext.forEach(e => e.addEventListener('click', clickNextFunc));
        this.btnsPrev.forEach(e => e.addEventListener('click', clickPrevFunc));
    }

    renderPaginator() {
        this.domNav.forEach(e => e.innerHTML = TemplatePaginator.getNavButtonsTemplate());
        this.btnsPrev = document.querySelectorAll('.btn_prev');
        this.btnsNext = document.querySelectorAll('.btn_next');
    }

    updatePaginator(currPage, totalPages) {
        this.setPrevEnabled(currPage > 0);
        this.setNextEnabled(currPage < totalPages - 1);
        this.setCurrentPage(currPage, totalPages);
    }

    setNextEnabled(enabled = true) {
        this.btnsNext.forEach(e => e.classList.toggle("disabled", !enabled));
    }

    setPrevEnabled(enabled = true) {
        this.btnsPrev.forEach(e => e.classList.toggle("disabled", !enabled));
    }

    setCurrentPage(page, maxPage) {
        this.divsCurrentPage = document.querySelectorAll('.currentPage');
        this.divsCurrentPage.forEach(e => e.innerHTML = `${page + 1} of ${maxPage}`);
    }
}
