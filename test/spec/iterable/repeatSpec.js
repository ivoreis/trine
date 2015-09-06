import { to } from "../../../src/iterable/head";
import { repeat } from "../../../src/iterable/repeat";
import { head } from "../../../src/iterable/head";

describe("repeat()", function () {
    it("Repeats the values of an iterator n times", function () {
        [...[1,2]::repeat(2)].should.deep.equal([1,2,1,2]);
    });

    describe("when given a non-restartable iterator", function () {
        it("Repeats the values of the iterator n times", function () {
            function * step (start, amount) {
                let current = start;
                while ( true ) {
                    yield current;
                    current += amount;
                }
            }

            [...step(2, 2)
                ::head(3)
                ::repeat(2)
            ]
                .should.deep.equal([2, 4, 6, 2, 4, 6]);
        });
    });
});
