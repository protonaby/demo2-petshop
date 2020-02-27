export class TemplateCart {

    static getCartItemTemplate(pet) {
        return `<div class="ui raised segment">
                  <div class="ui items ">
                    <div class="ui item capitalize">
                      <img class="ui small bordered rounded image cartImg" src="${pet.image}" onError="this.onerror = null; this.src='nophoto.jpg';">
                      <div class="middle aligned content">
                        <a class="header detailsLink" data-id="${pet.id}">${pet.breed} ${pet.species}</a>
                        <div class="meta">
                          <span>Age: ${pet.age}</span>
                          <span>Gender: ${pet.gender}</span>
                        </div>
                        <div class="header">$${pet.price}</div>
                        <div class="extra">
                          <div class="ui right floated red basic button removeBtn" data-id="${pet.id}">
                            Remove from cart
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>`
    }

    static getCartTemplate() {
        return `<div class="ui bottom sidebar overlay bg-white cartContainer">
                    <div class="ui segment bg-white">
                    <button class="right floated circular ui icon button closeBtn">
                      <i class="close icon"></i>
                    </button>
                        <h2 class="ui center dividing aligned icon header">
                          <i class="circular shopping cart icon"></i>
                          <span class="cartHeader">Shopping Cart</span>
                        </h2>
                        <div class="cartPanel ui divided items bg-white">
                        </div>
                    </div>
                </div>`;
    }

    static getTotalCostTemplate(totalCost) {
        return `<div class="item">
                  <div class="ui fluid right aligned container">
                    <h2 class="ui header">Total cost: <span class="ui blue small header">$ ${totalCost}</span></h2>
                    <button class="ui red basic button removeAllBtn">Remove all</button>
                    <button class="ui green button orderBtn">Proceed to order</button>
                  </div>
                </div>`;
    }

    static getEmptyCartMessageTemplate() {
        return `<h3 class="ui block center aligned header">Your Shopping Cart is empty.</h3>`;
    }

    static getOrderFormTemplate() {
        return `<div class="ui container">
                  <form class="ui small form">
                  <div class="fields">
                    <div class="field eight wide required">
                      <label>Name</label>
                      <input type="text" name="name" placeholder="Name">
                    </div>
                    <div class="field eight wide required">
                      <label>Phone Number</label>
                      <input type="text" name="phone" placeholder="Phone Number">
                    </div>
                    </div>
                    <div class="fields">
                    <div class="field eight wide required">
                      <label>Address</label>
                      <input type="text" name="address" placeholder="Address">
                    </div>
                    <div class="field eight wide required">
                      <label>Email</label>
                      <input type="text" name="email" placeholder="Email">
                    </div>
                    </div>
                    <div class="field">
                      <label>Notes</label>
                      <textarea rows="2" name="notes"></textarea>
                    </div>
                    <div class="ui error message"></div>
                    <div class="ui success message display-none">
                      <div class="header">Successful!</div>
                      <p>Your order was successfully submitted.</p>
                      <p>Our manager will contact you soon.</p>
                    </div>
                    <button class="ui basic violet button orderBackBtn">Back</button>
                    <button class="ui green button submitBtn" type="submit">Submit order</button>
                  </form>
                </div>`;
    }
}
