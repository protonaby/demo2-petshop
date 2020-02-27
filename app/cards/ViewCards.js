import {TemplateCards} from './TemplateCards.js';

export class ViewCards {
    constructor() {
        this.domCards = document.querySelector('.cards');
    }

    renderPets(pets) {
        this.domCards.innerHTML = pets.map(pet => {
            return TemplateCards.getPetTemplate(pet);
        }).join('');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    addDetailsListener(detFunc) {
        this.btnsDetails = document.querySelectorAll('.dtlsBtn');
        this.btnsDetails.forEach(btn => btn.addEventListener('click', () => {
            detFunc(Number(btn.dataset.id));
        }));
    }

    addBuyPetListener(buyPetFunc) {
        this.btnsBuyPet = document.querySelectorAll('.buyPetBtn');
        this.btnsBuyPet.forEach(btn => btn.addEventListener('click', () => {
            buyPetFunc(Number(btn.dataset.id));
        }));
    }

    toggleBuyPetBtn(id) {
        let btn = document.querySelector(`.buyPetBtn[data-id='${id}']`);
        if (!btn) return;
        btn.classList.toggle('basic');
        btn.innerText = btn.innerText === 'Add to cart' ? 'In cart' : 'Add to cart';
    }

}
