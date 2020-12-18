// 给定一个只包括 '('，
// ')'，
// '{'，
// '}'，
// '['，
// ']'
// 的字符串， 判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 来源： 力扣（ LeetCode）
// 链接： https: //leetcode-cn.com/problems/valid-parentheses
//     著作权归领扣网络所有。 商业转载请联系官方授权， 非商业转载请注明出处。

// @param {string} s
// @return {boolean}

var isValid = function (s) {
    let arr = [] //假定括号存储栈
    const obj = { //括号对应对象,保证对应关系
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (var i = 0; i < s.length; i++) { //遍历字符串s
        if (s[i] in obj) { //judge 当前值是否为obj中的键
            arr.push(s[i]) //把当前值放入存储栈内
        } else { //当前值不是obj中的键，就必定是obj中的值
            if (s[i] != obj[arr.pop()]) { //judge 这个值是否与栈尾的键对应，不对应直接返回false
                return false
            }
        }
    }
    return !arr.length //括号全部匹配，存储栈清空 返回
};