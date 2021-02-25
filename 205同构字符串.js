/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false // 先判断两个字符长度，减小不同长度字符串比较的内存消耗
    for(let i = 0; i<s.length; i++){
        if(s.indexOf(s[i])!==t.indexOf(t[i])) return false  // 判断每个字符在字符串中最先出现的索引是否相同
    }
    return true
};