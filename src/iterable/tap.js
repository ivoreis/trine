/**
 * Taps into the interator to see the intermediate results
 *
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * const log = msg => console.log.bind(console, msg);
 * [1,2,3]::tap(log('Message!!')) // yields Message!! [1,2,3]
 * ```
*/
export function * tap <iT> (
    fn : (_this : iT) => any,
) : Iterable<rT> {
    for (let x of this) {
        fn(x);
        yield x;
    }
};
