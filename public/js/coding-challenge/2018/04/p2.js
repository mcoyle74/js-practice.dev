function largestPalindromeNum(min, max) {
	let products = [],
		palindromes;
	for (var i = min; i <= max; i++) {
		for (var j = min; j <= max; j++) {
			products.push(i * j);
		}
	}

	palindromes = products.filter(product => product == +product.toString().split('').reverse().join(''));

	return Math.max(...palindromes);
}