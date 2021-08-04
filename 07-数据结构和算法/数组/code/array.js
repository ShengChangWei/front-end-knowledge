/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-30 14:00:47
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-08-04 11:24:06
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
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right]
    }
  }
  return left + 1;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let inPrices = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      const inM = prices[i + 1] - prices[i];
      inPrices = inPrices + inM;
    }
  }
  return inPrices;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const arryList = nums.filter(item => {
      return item === nums[i]
    })
    console.log(arryList)
    if (arryList.length === 1) {
      return arryList[0]
      break;
    }
  }
};


console.log(singleNumber([1, 1, 2]))