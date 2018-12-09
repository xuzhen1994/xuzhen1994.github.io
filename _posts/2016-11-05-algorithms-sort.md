---
title: 算法拾记：排序
layout: default
category: 技术
---

# 排序问题

**输入：**  n个数的一个序列（a1, a2, a3, ..., an）
**输出：**  输入的序列的一个排列（a1', a2', a3', ..., an'），满足a1'<=a2'<=a3'<=...<=an'

## 插入排序

```python
def insertion_sort(A) {
  for j in A:
    key = A[j]
    i = j - 1
    while i > 0 and A[i] > key:
      A[i+1] = A[i]
      i = i - 1
    A[i+1] = key
}
```

复杂度：O(n) ～ O(n^2)

## 归并排序

递归本质是分治：将原问题分解为几个规模较小且类似原问题的子问题，递归求解这些子问题，最后合并这些子问题的解建立原问题的解。

- **分解：**  分解待排序的n个元素的序列 成 2个n／2个元素的子序列
- **解决：**  用归并排序递归排序2个子序列
- **合并：**  合并2个已排序的子序列产生已排序的最终序列

```python
import sys
import math

def merge(A, p, q, r) {
  n1 = q - p + 1
  n2 = r - q
  i = j = 0
  for i < n1:
    L[i] = A[p+i]
  for j < n2:
    R[j] = A[q+j+1]
  L[n1+1] = R[n2+1] = sys.maxint
  i = j =0
  k = q
  for k <= r:
    if L[i] < R[j]
      A[k] = L[i]
      i += 1
    else:
      A[k] = R[j]
      j += 1
}

def merge_sort(A, p, r) {
  if p < r:
    q = math.floor((p + r)/2)
    merge_sort(A, p, q)
    merge_sort(A, q+1, r)
    merge(A, p, q, r)
}
```

复杂度：O(n*lgn)

