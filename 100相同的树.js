/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null) { //最先判断是否都为null
        return true //直接返回true
    } else if (p == null || q == null) { //判断其中一项的情况，其中一项为null，直接返回false
        return false
    } else if (p.val != q.val) { //两项均不为null时，判断每一项的val是否相同，不同直接false
        return false
    } else if (p.val == q.val) { //同级两项值相同，递归调用
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
};
//个人觉得我这个小白算法题没有体系，考虑不全各种情况，能想到递归，但是逻辑体系不成型