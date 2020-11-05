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
    })
    describe("calculateReturnChange", function() {
        var changeToReturn;
        
    }
})
