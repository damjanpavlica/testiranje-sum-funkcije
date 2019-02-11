describe("Testing sum funcion", function () {

    it("should add two integers", function () {
        expect(sum(2, 2)).toBe(4);
    });

    it("should add two negative numbers", function () {
        expect(sum(-2, -2)).toBe(-4);
    });

    it("should add two decimal numbers", function () {
        expect(sum(0.2, 0.4)).toBe(0.6);
    });

    it("should add two negative decimal numbers", function () {
        expect(sum(-0.2, -0.4)).toBe(-0.6);
    });

    it("should add all floating point numbers", function () {
        expect(sum(0.002, 0.004)).toBe(0.006);
    });

    it("should not add two strings", function () {
        expect(sum("java", "script")).toBeNaN();
    });

    it("should not add undefined and object", function () {
        expect(sum(undefined, {})).toBeNaN();
    });

    it("should not add string and number", function () {
        expect(sum("4", 4)).toBeNaN();
    });

    it("should add to an infinity", function () {
        expect(sum(Infinity, 1)).toBe(Infinity);
    });

});
