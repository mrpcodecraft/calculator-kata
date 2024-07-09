class Calculator {
    add(str: string): number {
        const values = this.parseString(str);

        if (values.some(val => val < 0)) {
            throw new Error(`Negative numbers not allowed ${values.filter(val => val < 0).join(", ")}`);
        }
        
        let sum = values.reduce((sum, val) => {
            return sum + (val >= 1000 ? 0: val);
        }, 0);

        return sum;
    }
    
    parseString(str: string): number[] {
        if (!str) return [0];

        let values: number[] = [];
        
        let delimiters: string[] = this.fetchDelimiters(str);
        
        str = this.fetchFinalString(str, delimiters);

        values = str.split(',').map(v => parseInt(v) || 0);
        
        return values;
    }

    fetchDelimiters(str: string): string[] {
        let delimiters: string[] = [];
        
        if (str.startsWith("//")) {
            delimiters = str.match(/(?<=\[)[^\r\n]*?(?=\])/g) || [];

            if (delimiters.length === 0) {
                delimiters = [str.charAt(2)];
            }
        }
        
        delimiters = [
            ...delimiters,
            '\n',
            ','
        ];

        return delimiters;
    }

    fetchFinalString(str: string, delimiters: string[]): string {
        let values: string[] = str.split('\n');

        if (delimiters.length > 2) {
            values.shift();
        }
        
        str = values.join(',');

        for(let delimiter of delimiters) {
            str = str.split(delimiter).join(',');
        }

        return str;
    }
}

export default Calculator;