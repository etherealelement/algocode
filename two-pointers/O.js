/**
 * @param {string[]} s
 * @returns {string[]}
 */

function isToken(token, token2, token3) {
  return token === "%" && token2 === "2" && token3 === "0";
}

export function unurlify(s) {
  let targetLength = s.length;

  for (let i = 0; i < s.length; i++) {
    if (isToken(s[i], s[i + 1], s[i + 2])) {
      s.splice(i, 3, " ");
    }
  }

  const symbolsCount = targetLength - s.length;

  for (let i = 0; i < symbolsCount; i++) {
    s.push("#");
  }

  return s;
}

console.log(
  unurlify(["h", "e", "l", "l", "o", "%", "2", "0", "w", "o", "r", "l", "d"]),
);
