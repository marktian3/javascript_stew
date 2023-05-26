const calculator = require('./calculator');

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});


describe('subtract', () => {
  test('subtracts two numbers', () => {
    expect(calculator.subtract(5,3)).toBe(2);
  });
})