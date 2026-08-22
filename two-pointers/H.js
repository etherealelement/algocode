// Даны две строки s и t. Необходимо определить, можно ли получить строку s, удаляя некоторые (возможно, ни одного) символы из строки t, не изменяя порядок оставшихся символов.

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function fuzzyMatch(s, t) {
  let p1 = 0;
  let p2 = 0;
  let result = "";

  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      result += t[p2];
      p1++;
      p2++;
    } else if (s[p1] !== t[p2]) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  return result === s;
}

console.log(fuzzyMatch("abc", "a1b2c3"));
