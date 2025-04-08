/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var removeElements = function(head, val) {
    // Създаваме фиктивен (dummy) възел
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            // Пропускаме възела със стойност val
            current.next = current.next.next;
        } else {
            // Преминаваме към следващия възел
            current = current.next;
        }
    }

    return dummy.next;
};