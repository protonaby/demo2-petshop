export class TemplateBot {

    static getMsgTemplate(pets, order) {
        return `
*${new Date().toLocaleString()} NEW ORDER SUBMITTED*
${TemplateBot.getOrderStrTemplate(order)}
------------------------------------------
*Items:*
${TemplateBot.getPetsMsgTemplate(pets)}
------------------------------------------
*Total:* $${pets.totalCost}`;
    }

    static getOrderStrTemplate(order) {
        return `------------------------------------------
*Name:* ${order.name}
*Phone:* ${order.phone}
*Email:* ${order.email}
*Address:* ${order.address}
${order.notes ? `*Notes:* ${order.notes}` : ''}`;
    }

    static getPetsMsgTemplate(pets) {
        return pets.map(pet => {
            return TemplateBot.getPetMsgTemplate(pet);
        }).join('\n');
    }

    static getPetMsgTemplate(pet) {
        return `- id: ${pet.id}\t${pet.species} ${pet.breed} $${pet.price}`;
    }
}