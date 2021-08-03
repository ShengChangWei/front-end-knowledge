/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-30 14:00:47
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-30 17:52:18
 * @Description: file content
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      } else {
        count++;
      }
    }
  }
  if (count === (nums.length * (nums.length - 1)) / 2) {
    return false;
  }
};

const containsDuplicate2 = function (nums) {
  return nums.length === Array.from(new Set(nums)).length ? false : true;
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1)
      }
    }
  }

  return nums.length;
};

/**
 * 双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
  if (nums == null || nums.length === 0) return 0;
 // 记录当前已经排好序的最后一个元素位置，即为慢指针
 let movedIndex = 0;

 // 用快指针遍历数组，查找要移动的元素
 for (let i = 0; i < nums.length; i++) {
   // 如果发现快指针遍历到的元素与慢指针指向的元素不同，则将其放置到慢指针的下一位，之后慢指针+1。
   if (nums[i] !== nums[movedIndex]) {
     nums[++movedIndex] = nums[i];
   }
 }

 // 新长度为慢指针+1
 return movedIndex + 1;
};


console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))