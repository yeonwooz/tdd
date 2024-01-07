//__test__ / sample.test.ts
test("Dummy unit test", () => {
  const actual = 1 + 2;
  expect(actual).toBe(3);
});

const multiplier = (money: number, num: number): number => {
  return money * num;
};

test("multiplier", () => {
  // when
  const money = 5;
  const num = 2;
  const result = multiplier(money, num);

  // then
  expect(result).toEqual(money * num);
});

enum Currency {
  USD,
  CHF,
}

const getExchangeRate = (currency: Currency) => {
  switch (currency) {
    case Currency.USD:
      return 1;
    case Currency.CHF:
      return 2;
    default:
      return 1;
  }
};

const calcuatePrice = (dollorPrice: number, currency: Currency) => {
  return dollorPrice * getExchangeRate(currency);
};

const convertToDollar = (price: number, currency: Currency) => {
  return Math.floor(price / getExchangeRate(currency));
};

test("multiplierByCurrency", () => {
  // given

  // when
  const money = 5;
  const usdResult = convertToDollar(
    calcuatePrice(money, Currency.USD),
    Currency.USD,
  );
  const chfResult = convertToDollar(
    calcuatePrice(money, Currency.CHF),
    Currency.CHF,
  );
  // then

  expect(chfResult).toEqual(5);
  expect(chfResult).toEqual(usdResult);
});

test("sum of moneys", () => {
  const money1 = 5;
  const money2 = 5;
  expect(money1 + money2).toEqual(10);
});
