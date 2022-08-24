function sumPairs(numbers, result) {
	for (let i = 0; i < numbers.length; i++) {
		let complement = result - numbers[i];
		if (numbers.includes(complement) && numbers.indexOf(complement) != i) {
			return [numbers[i], complement];
		}
	}
	return null;
}
