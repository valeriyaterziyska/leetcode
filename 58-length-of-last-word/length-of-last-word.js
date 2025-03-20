/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arrOfWords = s.trim().split(' ');
    return arrOfWords[arrOfWords.length - 1].length;
};