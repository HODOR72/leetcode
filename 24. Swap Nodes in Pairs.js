// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

const swapPairs = head => {
	if (!head || !head.next) {
		return head
	}
	let newHead = head.next
	head.next = swapPairs(newHead.next)
	newHead.next = head
	return newHead
}
