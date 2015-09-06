import { filter } from "../../../src/iterable/filter";

describe("filter()", function () {
    it("should yield the items that pass the condition", function () {
        [...[1,2,3,4,5]::filter(function () {
            return this % 2 === 0;
        })].should.deep.equal([2,4]);
    });
});
