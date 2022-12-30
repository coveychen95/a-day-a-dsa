function maxSubArray(nums: number[]): number {
  let pre: number = 0
  let max = nums[0]
  const len = nums.length
  for (let i = 0; i < len; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    max = Math.max(pre, max)
  }
  return max
};