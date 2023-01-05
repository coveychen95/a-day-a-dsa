function firstUniqChar(s: string): number {
  const arr = new Array(26).fill(0),
      len = s.length
  for(let i = 0; i< len;i++) {
      arr[s.charCodeAt(i) - 97]++
  }
  for(let i = 0; i< len;i++) {
      if (arr[s.charCodeAt(i) - 97] === 1) return i
  }
  return -1
};