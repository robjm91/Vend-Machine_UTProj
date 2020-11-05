// Vending Machine

//// VendingMachine and Register classes ////
class VendingMachine {

    constructor() {
        this.amountOfMoneyInChange = 5.00;
        this.candyBars = [];
        this.bagsOfChips = [];
        this.packsOfGum = [];

        for(let i = 0; i < 5; i++) {
            let candyBar = new CandyBar("candy bar", .75);
            this.candyBars.push(candyBar);
        }

        for(let i = 0; i < 5; i++) {
            let bagOfChips = new BagOfChips("bag of chips", .89);
            this.bagsOfChips.push(bagOfChips);
        }

        for(let i = 0; i < 5; i++) {
            let packOfGum = new PackOfGum("pack of gum", .15);
            this.packsOfGum.push(packOfGum);
        }
    }

    //// methods to unit test first: ////
    calculateReturnChange(priceOfItem, moneyInput) {
        let changeToReturn = moneyInput - priceOfItem;

        if(changeToReturn < 0) {
            changeToReturn = 0;
        }

        return changeToReturn;
    }

    removeItemFromInventory(itemToRemove) {
        if(itemToRemove === "candy bar") {
            return this.candyBars.shift();
        }
        else if(itemToRemove === "bag of chips") {
            return this.bagsOfChips.shift();
        }
        else if(itemToRemove === "pack of gum") {
            return this.packsOfGum.shift();
        }
    }

    addItemBackToInventory(itemToReinsert) {
        if(itemToReinsert.name === "candy bar") {
            this.candyBars.unshift(itemToReinsert);
        }
        else if(itemToReinsert.name === "bag of chips") {
            this.bagsOfChips.unshift(itemToReinsert);
        }
        else if(itemToReinsert.name === "pack of gum") {
            this.packsOfGum.unshift(itemToReinsert);
        }
    }

    addMoneyToMachine(moneyToAdd) {
        this.amountOfMoneyInChange += moneyToAdd;
    }

    // "main" method //
    performTransaction(sodaSelection, amountOfMoneyInserted) {
        let response = {
            itemToDispense: undefined,
            moneyToReturn: 0
        };

        response.itemToDispense = this.removeItemFromInventory(sodaSelection);

        if(response.itemToDispense) { // if response.itemToDispense exists...
            if(amountOfMoneyInserted >= response.itemToDispense.price) { // extra money inserted
                response.moneyToReturn = this.calculateReturnChange(response.itemToDispense.price, amountOfMoneyInserted);
                this.addMoneyToMachine(response.itemToDispense.price);
            }
            else if(amountOfMoneyInserted < response.itemToDispense.price) { // not enough money inserted
                console.log("Not enough money was inserted to purchase the " + response.itemToDispense.name + ".");

                this.addItemBackToInventory(response.itemToDispense);

                response.itemToDispense = undefined;
                response.moneyToReturn = amountOfMoneyInserted;
            }
        }

        return response;
    }
}

class VendingMachineItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class PackOfGum extends VendingMachineItem {
    constructor(name, price) {
        super(name, price);
    }
}

class CandyBar extends VendingMachineItem {
    constructor(name, price) {
        super(name, price);
    }
}

class BagOfChips extends VendingMachineItem {
    constructor(name, price) {
        super(name, price);
    }
}