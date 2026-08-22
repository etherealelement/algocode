// Даны два отсортированных по возрастанию массива nums1 и nums2. Необходимо вернуть новый массив nums3, который содержит все общие элементы из nums1 и nums2.

// Результат должен быть также отсортирован по возрастанию. Если элементы встречаются в массивах несколько раз, то их нужно продублировать в ответе.
//
//

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function intersect(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
}

console.log(intersect([1, 2], [1, 1]));
