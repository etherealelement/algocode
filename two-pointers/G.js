// Дан список символов chars. Нужно развернуть chars и вернуть измененный список в качестве ответа. Использовать встроенную функцию разворота нельзя.

// Пример 1:

/**
 * @param {string[]} chars
 * @returns {string[]}
 */
export function reverse(chars) {
  let start = 0;
  let end = chars.length - 1;

  while (start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }

  return chars;
}

console.log(reverse(["p", "e", "r", "f", "e", "c", "t", "i", "o", "n"]));
