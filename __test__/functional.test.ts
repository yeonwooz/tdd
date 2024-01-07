import { Currency } from '../enum';
import { convertToDollar, multiplier, multiplyWithCurrency, sum, sumWithCurrency } from '../src/functions';

test('multiply', () => {
    // when
    const money = 5;
    const num = 2;
    const result = multiplier(money, num);

    // then
    expect(result).toEqual(money * num);
});

test('multiply with Currency', () => {
    // when
    const money = 5;
    const usdResult = convertToDollar(multiplyWithCurrency(money, Currency.USD), Currency.USD);
    const chfResult = convertToDollar(multiplyWithCurrency(money, Currency.CHF), Currency.CHF);
    // then

    expect(chfResult).toEqual(5);
    expect(chfResult).toEqual(usdResult);
});

test('sum', () => {
    // when
    const moneys = [5, 5];
    const sumResult = sum(moneys);

    // then
    expect(sumResult).toEqual(10);
});

test('sum with currency', () => {
    // when
    const moneys = [
        {
            amount: 5,
            currency: Currency.USD,
        },
        {
            amount: 5,
            currency: Currency.CHF,
        },
    ];
    const targetCurrency = Currency.CHF;
    const result = sumWithCurrency(moneys, targetCurrency);

    // then
    expect(result).toEqual(20);
});
