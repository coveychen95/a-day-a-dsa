// 递归
function fibonacci(n: number) {
  if (n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n -2)
}

// 递推
function fibonacci2(n: number) {
  const arr = [1, 1]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}