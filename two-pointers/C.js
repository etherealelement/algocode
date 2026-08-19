// Дан массив целых чисел height, height[i] – высота линии. Нужно найти максимальную площадь, которую может заполнить вода между двумя линиями.

// ВАЖНО: площадь воды считается как min(height[i], height[j]) * (j - i), где i – индекс первой линии, а j - номер второй.

/**
 * @param {number[]} nums
 * @returns {number}
 */
// c двух сторон
export function maxArea(nums) {
  let left = 0;
  let right = nums.length - 1;
  let max = 0;

  while (left < right) {
    const currentArea = Math.min(nums[left], nums[right]) * (right - left);

    if (nums[left] < nums[right]) {
      left++;
    } else if (nums[left] > nums[right]) {
      right--;
    } else {
      right++;
      left--;
    }

    max = Math.max(max, currentArea);
  }

  return max;
}

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
