//__test__ / sample.test.ts
test("Dummy unit test", () => {
  const actual = 1 + 2;
  expect(actual).toBe(3);
});

test("multiplier", () => {
  const money = 5;
  const num = 2;
  const multiplied = money * num;
  expect(multiplied).toBe(10);
});
