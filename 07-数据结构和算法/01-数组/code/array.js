/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-30 14:00:47
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-08-12 11:18:46
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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {

      }
    }
  }
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  // 这段代码使用于每个元素都是9
  digits.unshift(1);
  return digits;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let len = nums.length - 1;
  for (let i = len; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums[i])
      nums.splice(i, 1);
    }
  }
  return nums;
};

var moveZeroes2 = function (nums) {
  if (nums == null || nums.length === 0) return;
  let index = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      // index++ 是后加加
      nums[index++] = nums[i];
    }
  }
  while (index < len) {
    nums[index++] = 0
  }
};

// 双指针
var moveZeroes3 = function (nums) {
  if (nums == null || nums.length === 0) return;
  let i = 0, len = nums.length;
  for (let j = 0; j < len; j++) {
    if (nums[j] !== 0) {
      let temp = nums[i]
      nums[i] = nums[j];
      nums[j] = temp;
      i++
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  let len = nums.length
  
};

console.log(moveZeroes([1, 0, 0]))