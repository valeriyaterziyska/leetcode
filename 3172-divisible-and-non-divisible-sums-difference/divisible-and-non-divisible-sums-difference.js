/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let sumNotDivisible = 0;
    let sumDivisible = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            sumNotDivisible += i;
        } else {
            sumDivisible += i;
        }
    }

    return sumNotDivisible - sumDivisible;
};