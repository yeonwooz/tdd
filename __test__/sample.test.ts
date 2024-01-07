//__test__ / sample.test.ts
test("Dummy unit test", () => {
  const actual = 1 + 2;
  expect(actual).toBe(3);
});

const multiplier = (money, num) => {
  return money * num;
};

test("multiplier", () => {
  // when
  const money = 5;
  const num = 2;
  const result = multiplier(money, num);

  // then
  expect(result).toBe(money * num);
});

