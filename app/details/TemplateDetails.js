export class TemplateDetails {

    static getDetailsTemplate(pet) {
        return `<div class="ui modal">
                    <i class="close icon"></i>
                    <div class="header capitalize">
                        ${pet.breed} ${pet.species}
                    </div>
                    <div class="image content">
                        <div class="ui medium image detImage">
                             <img src="${pet.image}" onError="this.onerror = null; this.src='nophoto.jpg';">
                        </div>
                        <div class="description capitalize">
                            <div class="ui grid">
                                <div class="four wide column bold">
                                    <div>Species: </div>
                                    <div>Breed: </div>
                                    <div>Gender: </div>
                                    <div>Weight: </div>
                                    <div>Age: </div>
                                    <div>Color: </div>
                                    <div>Sterile: </div>
                                    ${pet.hair ? '<div>Hair: </div>' : ''}
                                    ${pet.type ? '<div>Type: </div>' : ''}
                                    ${pet.activity ? '<div>Activity: </div>' : ''}
                                    <div>Price: </div>
                                </div>
                                <div class="right aligned twelve wide column">
                                    <div>${pet.species}</div>
                                    <div>${pet.breed}</div>
                                    <div>${pet.gender}</div>
                                    <div>${pet.weight} kg</div>
                                    <div>${pet.age}</div>
                                    <div>${pet.color}</div>
                                    <div>${pet.is_sterile ? 'yes' : 'no'}</div>
                                    ${pet.hair ? `<div>${pet.hair}</div>` : ''}
                                    ${pet.type ? `<div>${pet.type}</div>` : ''}
                                    ${pet.activity ? `<div>${pet.activity}</div>` : ''}
                                    <div>$${pet.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="ui basic violet deny button closeDtlsBtn">
                            Close
                        </div>
                        ${pet.inCart
                        ?
                        `<div class="ui green button dtlsBuyPetBtn" data-id="${pet.id}">
                          In cart
                         </div>`
                        :
                        `<div class="ui basic green button dtlsBuyPetBtn" data-id="${pet.id}">
                            Add to cart
                        </div> `}
                    </div>
                </div>`;
    }
}
