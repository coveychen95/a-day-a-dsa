function twoSum(nums: number[], target: number): number[] {
    const m = new Map();
    for(let i = 0,len = nums.length;i < len; i++) {
      if(m.has(nums[i])) {
        return [m.get(nums[i]),i];
      } else {
        m.set(target - nums[i],i)
      }
    }
    return []
  };