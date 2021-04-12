/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    //上山下山
    let up=1;
    let down=0;
for(var i=0;i<arr.length;i++){

    if(arr[i]<arr[i+1]){
        continue
    }else if(arr[i]==arr[i+1]){
        return false;
        
    }else if(arr[i]>arr[i+1]){
        up=0;
        down=1
        if(i==arr.length-1){
            return true
        }
        continue
    }else{
        return false
    }
}
};