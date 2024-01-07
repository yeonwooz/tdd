import { Currency } from '../enum';

class Dollar {
    money: number;

    constructor(num: number) {
        this.money = num;
    }

    times(num: number) {
        this.money *= num;
    }
}

test('multiplier', () => {
    const dollar = new Dollar(5);
    dollar.times(2);
    expect(dollar.money).toEqual(10);
});

class Money {
    money: number;
    currency: Currency;

    constructor(num: number) {
        this.money = num;
    }

    times(num: number) {
        this.money *= num;
    }
}

test('testMultiplication', () => {});
