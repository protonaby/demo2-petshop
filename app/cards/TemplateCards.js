export class TemplateCards {

    static getPetTemplate(pet) {
        return `<div class="ui centered raised card capitalize">
                  <img src="${pet.image}" onError="this.onerror = null; this.src='nophoto.jpg';">
                    <div class="content">
                        <a class="header">${pet.breed}</a>
                        <div class="meta">
                          <span class="date">${pet.species} ${pet.gender}</span>
                        </div>
                        <div class="description">
                          Age: ${pet.age}
                        </div>
                    </div>
                    <div class="extra content">
                        <a>
                          Price: $${pet.price}
                        </a>
                    </div>
                    <div class="extra content">
                      <div class="ui two buttons">
                         ${pet.inCart
                         ?
                         `<div class="ui green button buyPetBtn" data-id="${pet.id}">In cart</div>`
                         :
                         `<div class="ui basic green button buyPetBtn" data-id="${pet.id}">Add to cart</div>`}
                        <div class="ui basic blue button dtlsBtn" data-id="${pet.id}">Details</div>
                      </div>
                    </div>
                </div>`;
    }
}
