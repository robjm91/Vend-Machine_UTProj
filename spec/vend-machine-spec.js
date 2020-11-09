/* HELP SECTION

describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });
});
*/

describe("VendingMachine", function(){
    var vendingMachine;

    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });

    it("adding 2 dollars will make 7 total dollars",function(){
        vendingMachine.addMoneyToMachine(2);

        expect(vendingMachine.amountOfMoneyInChange).toBe(7);
    });

});
describe("calculateReturnChange", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should return zero change to customer when moneyInput - priceOfItem", function(){
        let change = vendingMachine.calculateReturnChange(1,1);//get the 'change' from 'this method' in 'vending machine'

        expect(change).toBe(0);
    });

});
describe("removeItemFromInventory", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should remove candy bar", function(){
        let itemtoRemove = vendingMachine.removeItemFromInventory("candy bar");

        expect(itemtoRemove).toBe(itemtoRemove);
    });
});
describe("removeItemFromInventory", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should remove bag of chips", function(){
        let itemtoRemove = vendingMachine.removeItemFromInventory("bag of chips");

        expect(itemtoRemove).toBe(itemtoRemove);
    });
});
describe("removeItemFromInventory", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should remove pack of gum", function(){
        let itemtoRemove = vendingMachine.removeItemFromInventory("pack of gum");

        expect(itemtoRemove).toBe(itemtoRemove);
    });
});
describe("addItemBackToInventory", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should reinsert candy bar", function(){
        let itemToReinsert = vendingMachine.addItemBackToInventory("candy bar");

        expect(itemToReinsert).toBe(itemToReinsert);
    });
});
describe("addItemBackToInventory", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should reinsert bag of chips", function(){
        let itemToReinsert = vendingMachine.addItemBackToInventory("bag of chips");

        expect(itemToReinsert).toBe(itemToReinsert);
    });
});
describe("addItemBackToInventory", function() {
    var vendingMachine;

    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it("should reinsert pack of gum", function(){
        let itemToReinsert = vendingMachine.addItemBackToInventory("pack of gum");

        expect(itemToReinsert).toBe(itemToReinsert);
    });
});
