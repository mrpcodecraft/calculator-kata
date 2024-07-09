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
    
    it("4) Test for string with comma and next line tag seperated multiple value", () => {
        expect(add("1\n2,3")).to.equal(6);
    });
    
    it("5) Test for string with custom delimiter and next line tag seperated multiple value", () => {
        expect(add("//;\n1;2;5")).to.equal(8);
    });
    
    it("6) Test case for string with negative number", () => {
        expect(() => add("//;\n1;2;-5")).to.throw(Error, 'Negative numbers not allowed -5');
    });
})