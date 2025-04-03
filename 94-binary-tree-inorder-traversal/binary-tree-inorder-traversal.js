/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Отиваме до най-левия възел
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Вземаме последния добавен възел от стека (това е текущия възел)
        current = stack.pop();
        
        // Добавяме стойността на текущия възел в резултата
        result.push(current.val);
        
        // Преминаваме към дясното поддърво
        current = current.right;
    }
    
    return result;
};