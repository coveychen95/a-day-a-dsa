function containsDuplicate(nums: number[]): boolean {
  const remenber = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (remenber.has(nums[i])) return true
    remenber.add(nums[i])
  }
  return false
};