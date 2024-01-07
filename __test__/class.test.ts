import { Currency } from '../enum';
import { Bank, Dollar, Franc } from '../src/classes';

test('testMultiplication', () => {
    // given
    const five = new Dollar(5);

    // then
    expect(new Dollar(10).dollarPrice).toEqual(five.times(new Dollar(2)).dollarPrice);
    expect(new Dollar(15).dollarPrice).toEqual(five.times(new Dollar(3)).dollarPrice);
});

test('testEquality', () => {
    // given
    const fiveDollars = new Dollar(5);
    const sixDollars = new Dollar(6);

    const fiveFrancs = new Franc(5);
    const sixFrancs = new Franc(6);

    // then
    expect(new Dollar(5).dollarPrice).toEqual(fiveDollars.dollarPrice);
    expect(new Dollar(5).dollarPrice).not.toEqual(sixDollars.dollarPrice);
    expect(new Franc(5).dollarPrice).toEqual(fiveFrancs.dollarPrice);
    expect(new Franc(5).dollarPrice).not.toEqual(sixFrancs.dollarPrice);
    expect(new Franc(5).currencyPrice).toEqual(fiveFrancs.currencyPrice);
    expect(new Franc(5).currencyPrice).not.toEqual(sixFrancs.currencyPrice);
});

test('testSimpleAddition', () => {
    // given
    const fiveDollar = new Dollar(5);
    const sum = [fiveDollar, fiveDollar];
    const bank = new Bank();
    const reduced = bank.reduce(sum);

    // then
    expect(new Dollar(10).dollarPrice).toEqual(reduced);
});

test('testMixedAddition', () => {
    // given
    const fiveDollar = new Dollar(5);
    const sixFranc = new Franc(6);
    const bank = new Bank();
    const sumInUSD = bank.reduce([fiveDollar, sixFranc]);
    const sumInCHF = bank.reduce([fiveDollar, sixFranc], Currency.CHF);

    // then
    expect(sumInUSD).toEqual(fiveDollar.plus(sixFranc).dollarPrice);
    expect(sumInCHF).toEqual(fiveDollar.plus(sixFranc).currencyPrice);
});
