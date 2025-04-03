/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = true;
    if(s === "" || s === " ") {
        return result;
    }

    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for(let i = 0; i < string.length; i++) {
        let end = string.length - 1 - i;

        if(string[i] !== string[end]) {
            result = false;
        }

    }

    return result;
};