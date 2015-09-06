import { reject } from "../../../src/iterable/reject";

describe("reject()", function () {
    it("should yield the items that don't pass the condition", function () {
        [...[1,2,3,4,5]::reject(function () {
            return this % 2 === 0;
        })].should.deep.equal([1,3,5]);
    });
});
