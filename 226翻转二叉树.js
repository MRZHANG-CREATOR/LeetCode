/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) { //试题了解来源：大圣老师公开课
    //将二叉树翻转
    //思想：递归
    //时间复杂度O(n)  空间复杂度O(n)
    if (root == null) { //排除null
        return root
    } else {
        //解构赋值
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }
};
//我作为一个小白，可能可以理解递归思想，但是实在不知道解构赋值