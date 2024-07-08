class Calculator {
    add(str: string): number {
        return this.parseString(str);
    }

    parseString(str: string): number {
        return !str ? 0 : parseInt(str);
    }
}

export default Calculator;