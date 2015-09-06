import { to } from "../../../src/iterable/head";
import { head } from "../../../src/iterable/head";
import { repeatLoop } from "../../../src/iterable/repeatLoop";

describe("repeatLoop()", function () {
    it("indefinitely repeats the values of an iterator", function () {
        [...[1,2,3]::repeatLoop()::head(6)].should.deep.equal([1,2,3,1,2,3]);
    });

    describe("when given a non-restartable iterator", function () {
        it("indefinitely repeats the values of the iterator", function () {
            function * step (start, amount) {
                let current = start;
                while ( true ) {
                    yield current;
                    current += amount;
                }
            }

            [...step(2, 2)
                ::head(3)
                ::repeatLoop()
                ::head(6)
            ]
                .should.deep.equal([2, 4, 6, 2, 4, 6]);
        });
    });
});
