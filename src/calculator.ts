class Calculator {
    add(str: string): number {
        const values = this.parseString(str);

        if (values.some(val => val < 0)) {
            throw new Error(`Negative numbers not allowed ${values.filter(val => val < 0).join(", ")}`);
        }
        
        let sum = values.reduce((sum, val) => sum + val, 0);

        return sum;
    }
    
    parseString(str: string): number[] {
        if (!str) return [0];
        let values: number[] = [];
        
        if (str.startsWith("//")) {
            str = this.parseStringWithCustomDelimiter(str);  
        }
        
        values = str.split(/[\n,]+/).map(v => parseInt(v) || 0);
        
        return values;
    }

    parseStringWithCustomDelimiter(str: string): string {
        const delimiter = str.charAt(2);
        const rest = str.substring(4);
        return rest.split(delimiter).map(v => parseInt(v) || 0).join(",");
    }
}

export default Calculator;