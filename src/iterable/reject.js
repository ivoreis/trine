/**
 * Yields the items that don't qualify the condition.
 *
 * @this {Iterable<T>}
 * @param condition A condition function to see if the item should be discarded.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,5]
 *   ::reject(function () {
 *     return this % 2 === 0;
 *   }) // yields [1,3,5]
 * ```
*/
export function * reject <T> (
    condition : (_this : T) => boolean,
) : Iterable<T> {
    for ( const item of this ) {
        if ( !item::condition() ) { yield item; }
    }
};
