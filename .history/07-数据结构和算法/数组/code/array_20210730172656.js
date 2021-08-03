/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-30 14:00:47
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-30 17:26:56
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
  for (let i = nums.length - 1; i < =nums.length - 1; i--) {
    console.log(nums[i])
    for (let j = i - 1; j < nums.length; j--) {
      console.log(nums[i], nums[j])
      if (nums[i] === nums[j]) {
        nums.splice(i, 1)
      }
    }
  }

  return nums.length;
};

console.log(removeDuplicates([1,1,2]))