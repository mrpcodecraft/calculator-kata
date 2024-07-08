import {describe} from 'mocha';
import {expect} from 'chai';
import Calculator from './calculator';

describe("Test cases for calculator", () => {
    const add = (str: string): number => {
        const calculator = new Calculator();
        return calculator.add(str);
    }

    it("1) Test for empty string", () => {
        expect(add("")).to.equal(0);
    });

    it("2) Test for string with single value", () => {
        expect(add("1")).to.equal(1);
    });
    
    it("3) Test for string with comma seperated multiple value", () => {
        expect(add("1,2,3")).to.equal(6);
    });
    
    it("3) Test for string with comma and next line tag seperated multiple value", () => {
        expect(add("1\n2,3")).to.equal(6);
    });
})