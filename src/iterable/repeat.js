/**
 * Repeat the values of a given iterator n times
 *
 * @this {Iterable<T>}
 * @param n How many times the iterable should be repeated
 * @example Basic Usage
 *
 * ```javascript
 * [1,2]::repeat(2); // yields [1,2,1,2]
 * ```
*/
export function * repeat <T> (
    n : number
) : Iterable<T> {
    if ( n < 1 ) {
        return;
    }

    const items = [...this];
    let i = 0;

    while ( n > i++ ) {
        yield * items;
    }
};
