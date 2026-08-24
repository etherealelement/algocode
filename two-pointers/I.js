// Даны два массива nums1 и nums2, отсортированные по не убыванию.

// Необходимо вернуть все элементы из nums1, которые не встречаются в nums2, так же в порядке по не убыванию.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function findDifference(nums1, nums2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1 += 1;
    } else if (nums1[p1] > nums2[p2]) {
      p2 += 1;
    } else {
      p1 += 1;
    }
  }

  result.push(...nums1.slice(p1));
  return result;
}

console.log(findDifference([1, 2, 3, 4, 5], [4, 5, 6]));
