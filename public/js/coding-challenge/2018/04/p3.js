function validate(str) {
	let lower = /[a-z]/;
	let upper = /[A-Z]/;
	let num = /[0-9]/;
	let special = /[^a-zA-Z0-9]/;

	if (!lower.test(str) || !upper.test(str) || !num.test(str) || !special.test(str)) {
		return false;
	}

	return str.length >= 12;
}