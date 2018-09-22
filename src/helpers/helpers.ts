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

/**
 * Builds an email address on the fly, given an author and a provider.
 * This is done in order to avoid an excessive amount of web crawlers from
 * getting the email.
 * @param author The complete name of the author, in the form `name.surname`
 * @param provider In the form `gmail.com`, `yahoo.it` etc
 */
export function buildEmailAddress(author: string, provider: string) {
  const prefix = author.split(' ').join('.').toLowerCase();

  return `${prefix}@${provider}`;
}
