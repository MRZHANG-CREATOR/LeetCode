/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)// 初始化数组1的元素数量
    nums2.splice(n)// 初始化数组2的元素数量
    nums1.push(...nums2) // 将数组2解构添加到数组1中
    nums1.sort((a,b)=>a-b) // 将合并的数组升序排序
};