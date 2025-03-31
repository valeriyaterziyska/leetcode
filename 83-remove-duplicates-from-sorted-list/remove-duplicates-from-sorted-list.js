/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
     let current = head; // Започваме от началото на списъка

    while (current && current.next) { // Докато има следващ елемент
        if (current.val === current.next.val) {
            current.next = current.next.next; // Пропускаме дублирания елемент
        } else {
            current = current.next; // Преминаваме към следващия уникален елемент
        }
    }

    return head; // Връщаме променения списък
};