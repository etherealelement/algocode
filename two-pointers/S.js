// Даны два массива nums1 и nums2, отсортированные по возрастанию и состоящие из уникальных элементов. Нужно найти все элементы, которые встречаются только в одном из массивов и вернуть их в порядке возрастания.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function findDifference(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      result.push(nums2[p2]);
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  result.push(...nums1.slice(p1));
  result.push(...nums2.slice(p2));
  return result;
}

console.log(findDifference([1, 5, 7, 9], [2, 3, 5, 6, 7, 8]));
