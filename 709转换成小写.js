/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.split('').map(v=>{
        return  String.fromCharCode(v.charCodeAt(0)+32)
    }).join('')
};
console.log(toLowerCase('HELLO'))