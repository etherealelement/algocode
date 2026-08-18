// Сумма в сортированном массиве
// легко

// # vk

// # озон

// # яндекс
// Дан отсортированный массив nums и число target. Нужно вернуть позиции двух чисел, которые дают в сумме target, при этом ответ гарантированно присутствует и он единственный.

// Нужно вернуть сначала меньший индекс, а потом больший (индексы не могут быть равными). При этом индексация в массиве начинается с единицы, а не с нуля.

// ВАЖНО: реши за O(1) по памяти

// паттерн: с двух сторон
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const currentSum = nums[start] + nums[end];

    if (currentSum < target) {
      start++;
    } else if (currentSum > target) {
      end--;
    } else if (currentSum === target) {
      return [start + 1, end + 1];
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
