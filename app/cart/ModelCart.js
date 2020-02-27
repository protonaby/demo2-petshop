export class ModelCart {
    constructor() {
        this._pets = JSON.parse(sessionStorage.getItem('cart-storage')) || [];
    }

    get pets() {
        this._pets.totalCost = this._pets.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2);
        return this._pets;
    }

    getPet(id) {
        return this._pets.find(p => p.id === id);
    }

    addPet(pet) {
        this._pets.push(pet);
        this.updateSessionStorage();
    }

    removePet(id) {
        this._pets = this._pets.filter(p => p.id !== id);
        this.updateSessionStorage();
    }

    emptyCart() {
        this._pets = [];
        this.updateSessionStorage();
    }

    updateSessionStorage() {
        sessionStorage.setItem('cart-storage', JSON.stringify(this._pets));
    }
}