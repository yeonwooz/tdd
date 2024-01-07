import { Currency } from '../enum';

export const multiplier = (money: number, num: number): number => {
    return money * num;
};

export const getExchangeRate = (currency: Currency) => {
    switch (currency) {
        case Currency.USD:
            return 1;
        case Currency.CHF:
            return 2;
        default:
            return 1;
    }
};


export const multiplyWithCurrency = (dollorPrice: number, currency: Currency) => {
    return dollorPrice * getExchangeRate(currency);
};

export const convertToDollar = (price: number, currency: Currency) => {
    return Math.floor(price / getExchangeRate(currency));
};


export const sum = (moneys: number[]) => {
    return moneys.reduce((acc, cur) => acc + cur, 0);
};

export const sumWithCurrency = (
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