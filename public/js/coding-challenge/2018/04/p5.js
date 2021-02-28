function sum1sOfBinary(left, right) {
	let integers = [],
		count,
		bin;

	for (let i = left; i <= right; i++) {
		bin = i.toString(2);
		count = 0;
		for (let j = 0; j < bin.length; j++) {
			if (bin[j] == '1') count++;
		}
		integers.push(count);
	}

	return integers.reduce((a, b) => a + b);
}
