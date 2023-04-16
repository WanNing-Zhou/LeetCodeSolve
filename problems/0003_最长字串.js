/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let occ = new Set();
    const n = s.length;
    let  rk = -1; //右指针
    let maxLen = 0;
    for(let i= 0; i < n; i++){
       if(i!=0){
           occ.delete(s.charAt(i-1)) //每向右移动一次指针,将前一个值删除,防止影响下面判断
       }

        while(rk+1<n && !occ.has(s.charAt(rk+1))){
            occ.add(s.charAt(rk+1))
            rk++
        }
        maxLen = Math.max(maxLen,rk-i+1)
    }
    return maxLen
};

console.log(lengthOfLongestSubstring('pwwkew'))