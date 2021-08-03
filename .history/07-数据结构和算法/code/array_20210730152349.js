/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-30 14:00:47
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-30 15:23:49
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



const isTrue = containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

console.log(isTrue)
