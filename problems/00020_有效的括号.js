/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    let flag = true;
    let  arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i]==='('||s[i]==='['||s[i]==='{'){
            arr.push(s[i])
        }else{
            let headChar = arr.pop();
            if (s[i]===']'&&headChar!=='['){
                flag = false;
            }
            if (s[i]===')'&&headChar!=='('){
                flag = false;
            }
            if (s[i]==='}'&&headChar!=='{'){
                flag = false;
            }
            if (!flag){
                break;
            }

        }
    }

    if(arr.length>0){
        flag = false;
    }

    return flag;

};


let s = "()[]{}";
console.log(isValid(s))