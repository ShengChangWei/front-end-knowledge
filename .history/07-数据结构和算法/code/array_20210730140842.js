/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-30 14:00:47
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-30 14:08:42
 * @Description: file content
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  for(let i = 0; i< nums.length -1; i++) {
    for(let j = i + 1; j< nums.length; j++) {
      if(nums[i] === nums[j] ) {
        return true
      }
    }
  }
};