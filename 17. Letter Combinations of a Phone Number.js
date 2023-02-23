// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

let alphabet = {
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz',
}

const permute = (permutations, letters) => {
	let result = []

	for (let letter of letters) {
		for (let permutation of permutations) {
			result.push(permutation + letter)
		}
	}
	return result
}

const letterCombinations = digits => {
	if (digits.length === 0) return []

	return digits
		.split('')
		.reduce((prev, curr) => permute(prev, alphabet[curr]), [''])
}
