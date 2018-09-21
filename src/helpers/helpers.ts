/**
 * Returns the `arr.reduce()` callback for `joinAnd()`.
 * 
 * @param arr
 * @param separator
 */
export function join<T>(arr: T[], separator = ','): Array<T|string> {
  return (
    arr.reduce((acc, curr) => {
      acc = acc.concat([curr, separator]);

      return acc;
    }, [] as Array<T|string>)
  )
};

/**
 * Given an array of possibly mixed items, it returns a new array with the same elements
 * separated by comma (by default), except the last one, which has an `end` conjunction.
 * 
 * @param arr
 * @param separator defaults to `, ` (note the space!) 
 * @param and defaults to `and` (without spaces)
 */
export function joinAnd<T>(arr: T[], separator = ', ', and = 'and'): Array<T|string> {
  const last = arr.length - 1;
  const arrWithoutLast = arr.slice(0, last);
  const joinedArrWithoutLast = join(arrWithoutLast, separator);
  const spacedAnd = ` ${and} `;
  joinedArrWithoutLast.pop(); // removes last ', '

  return joinedArrWithoutLast.concat([
    spacedAnd,
    arr[last],
  ]);
}
