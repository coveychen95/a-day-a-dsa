function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let p1 = 0,
    p2 = 0,
    len1 = nums1.length,
    len2 = nums2.length,
    res:number[]  = []
  while (p1 < len1 && p2 < len2) {
    if (nums1[p1] === nums2[p2]) {
      res.push(nums1[p1++])
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      p1++
    } else if (nums1[p1] > nums2[p2]) {
      p2++
    } 
  }
  return res
};