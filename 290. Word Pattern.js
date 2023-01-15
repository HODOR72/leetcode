// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

const wordPattern = (pattern, s) => {
	let p = pattern.split('')
	let str = s.split(' ')

	let r1 = ''
	for (let i = 0; i < p.length; i++) {
		r1 += p.indexOf(p[i])
	}

	let r2 = ''
	for (let i = 0; i < str.length; i++) {
		r2 += str.indexOf(str[i])
	}

	return r1 === r2
}
