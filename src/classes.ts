import { Currency } from '../enum';

export class Bank {
    static getExchangeRate(currency: Currency) {
        switch (currency) {
            case Currency.USD:
                return 1;
            case Currency.CHF:
                return 2; // actually around 0.8
            default:
                return 1;
        }
    }

    reduce(moneys: Money[], currency: Currency = Currency.USD) {
        const dollarSum = moneys.reduce((acc, cur) => acc + cur.dollarPrice, 0);
        return new Money(dollarSum, currency).calculateCurrency(currency);
    }
}

export class Money {
    private amount: number;
    currency: Currency;
    dollarPrice: number;
    currencyPrice: number;

    constructor(num: number, currency: Currency = Currency.USD) {
        this.amount = num;
        this.currency = currency;
        this.dollarPrice = this.calculateDollar();
        this.currencyPrice = this.calculateCurrency(currency);
    }

    times(money: Money, currency: Currency = Currency.USD) {
        const dollarMultiplied = this.dollarPrice * money.dollarPrice;
        return new Money(dollarMultiplied, currency);
    }

    plus(money: Money, currency: Currency = Currency.USD) {
        const dollarAdded = this.dollarPrice + money.dollarPrice;
        return new Money(dollarAdded, currency);
    }

    calculateDollar() {
        return this.amount / Bank.getExchangeRate(this.currency);
    }

    calculateCurrency(targetCurrency: Currency) {
        return (this.amount / Bank.getExchangeRate(this.currency)) * Bank.getExchangeRate(targetCurrency);
    }
}

export class Dollar extends Money {}

export class Franc extends Money {}
