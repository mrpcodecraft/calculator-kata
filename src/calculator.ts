class Calculator {
    add(str: string): number {
        const values = this.parseString(str);
        
        return values.reduce((acc, val) => acc + val, 0);
    }

    parseString(str: string): number[] {
        if (!str) return [0];
        let values = str.split(',').map(v => parseInt(v) || 0);
        return values;
    }
}

export default Calculator;