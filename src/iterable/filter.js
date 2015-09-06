/**
 * Yields the items that qualify the condition.
 *
 * @this {Iterable<T>}
 * @param condition A condition function to see if the item should be taken.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4]
 *   ::filter(function () {
 *     return this % 2 === 0;
 *   }) // yields [2,4]
 * ```
*/
export function * filter <T> (
    condition : (_this : T) => boolean,
) : Iterable<T> {
    for ( const item of this ) {
        if ( item::condition() ) { yield item; }
    }
};
