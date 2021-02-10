/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // if(n===0||n===1){
    //     return n
    // }else{
    //     return fib(n-1)+fib(n-2)
    // }
    // 递归，重复计算太多，
    // 优化 计算值缓存
    let temp=[];
    for(let i = 0;i<=n;i++){
        if(i===0||i===1){
            temp[i]=i
        }else{
            temp[i]=temp[i-1]+temp[i-2]
        }
    }
    return temp[n]
    };