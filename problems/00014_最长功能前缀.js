/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let r = 0;
    let str = strs[0]
    let  res = '';
    let flag = true;
    for (let i = 0;i<str.length;i++){
        for(let j = 0; j<strs.length; j++){
            if (strs[j][i]!==str[i]){
                flag = false;
                break;
            }
        }
        if(flag){
            res += str[i];
        }else{
            break;
        }

    }

    return res;

};


let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
