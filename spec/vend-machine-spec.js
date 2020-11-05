describe("VendingMachine", function(){
    var vendingMachine;

    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });

    it("adding 2 dollars will make 7 total dollars",function(){
        vendingMachine.addMoneyToMachine(2);

        expect(vendingMachine.amountOfMoneyInChange).toBe(7);
    })
})