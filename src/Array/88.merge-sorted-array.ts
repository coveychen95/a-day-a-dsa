/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let left  = 0, right = 0
  let res = new Array(m + n).fill(0)
  let remenber
  while (left < m || right < n) {
    if (left === m) {
      remenber =  nums2[right++]
    } else if (right === n) {
      remenber =  nums1[left++]
    } else if (nums1[left] <= nums2[right]) {
      remenber = nums1[left++]
    } else {
      remenber = nums2[right++]
    }
    res[left + right - 1] = remenber
    console.log('left, right, res: ', left, right, res);
  }
  for (let i = 0; i < m + n - 1; i++) {
    nums1[i] = res[i]
  }
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)