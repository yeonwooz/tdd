import { Currency } from '../enum';

const multiplier = (money: number, num: number): number => {
    return money * num;
};

test('multiply', () => {
    // when
    const money = 5;
    const num = 2;
    const result = multiplier(money, num);

    // then
    expect(result).toEqual(money * num);
});

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

const multiplyWithCurrency = (dollorPrice: number, currency: Currency) => {
    return dollorPrice * getExchangeRate(currency);
};

const convertToDollar = (price: number, currency: Currency) => {
    return Math.floor(price / getExchangeRate(currency));
};

test('multiply with Currency', () => {
    // when
    const money = 5;
    const usdResult = convertToDollar(multiplyWithCurrency(money, Currency.USD), Currency.USD);
    const chfResult = convertToDollar(multiplyWithCurrency(money, Currency.CHF), Currency.CHF);
    // then

    expect(chfResult).toEqual(5);
    expect(chfResult).toEqual(usdResult);
});

const sum = (moneys: number[]) => {
    return moneys.reduce((acc, cur) => acc + cur, 0);
};

const sumWithCurrency = (
    moneys: {
        amount: number;
        currency: Currency;
    }[],
    targetCurrency: Currency,
) => {
    const sum = moneys.reduce((acc, cur) => {
        return acc + convertToDollar(multiplyWithCurrency(cur.amount, cur.currency), cur.currency);
    }, 0);
    return multiplyWithCurrency(sum, targetCurrency);
};

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
