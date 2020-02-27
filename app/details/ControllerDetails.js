import {ViewDetails} from './ViewDetails.js';

export class ControllerDetails {

    constructor({subscribe, notify}) {
        this.view = new ViewDetails();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('click-details', this.displayDetails.bind(this));
    }

    displayDetails(pet) {
        this.pet = pet;
        this.view.renderDetails(pet);
        this.view.addBuyPetListener(this.handleClickBuyPet.bind(this));
    }

    handleClickBuyPet(id) {
        this.view.toggleBtnBuyPet();
        this.notify('pet-updated', id);
        if (this.pet.inCart) {
            this.notify('click-buy-pet', this.pet);
        } else {
            this.notify('click-cancel-buy-pet', this.pet);
        }
    }

}
