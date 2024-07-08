class Calculator {
    add(str: string): number {
        const values = this.parseString(str);
        
        return values.reduce((acc, val) => acc + val, 0);
    }

    parseString(str: string): number[] {
        if (!str) return [0];
        let values: number[] = [];
        
        if (str.startsWith("//")) {
            const delimiter = str.charAt(2);
            const rest = str.substring(4);
            str = rest.split(delimiter).map(v => parseInt(v) || 0).join(",");
        }
        
        values = str.split(/[\n,]+/).map(v => parseInt(v) || 0);
        
        return values;
    }
}

export default Calculator;