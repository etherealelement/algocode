// Дана строка s. Верните true, если s является палиндромом, или false в противном случае. Фраза является палиндромом, если после преобразования всех заглавных букв в строчные и удаления всех символов, кроме букв и цифр, она читается одинаково слева направо и справа налево.

// Буквенно-цифровые символы включают латинские буквы и цифры.
//
//
/**
 * @param {string} s
 * @returns {boolean}
 */
export function isPalindrome(s) {
  const clearText = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = clearText.length - 1;

  while (left <= right) {
    if (clearText[left] !== clearText[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("0P"));
