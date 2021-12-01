import {Component} from "react";

class CRCComponent extends Component {

    state = {
        number: "",
        numberToRelode: "",
        polynominal: "",
        polynominalToRelode: "",
        result: "",
        result2: "",
    }

    render() {
        return (
            <>
                <h1>CRC</h1>
                <input placeholder="Wpisz ciag znakow" onChange={(e) => this.setState({number: e.target.value})}/>
                <input placeholder="Wpisz 8 bitowi dzielnik"
                       onChange={(e) => this.setState({polynominal: e.target.value})}/>
                <button onClick={() => this.calculate()}>Calculate</button>
                <p>{this.state.result}</p>
                <h2>Sprawdzenie</h2>
                <input placeholder="Wpisz ciag znakow"
                       onChange={(e) => this.setState({numberToRelode: e.target.value})}/>
                <input placeholder="Wpisz 8 bitowi dzielnik"
                       onChange={(e) => this.setState({polynominalToRelode: e.target.value})}/>
                <button onClick={() => this.decalculate()}>Decalculate</button>
                <p>{this.state.result2}</p>
            </>
        )
    }

    calculate() {
        let number = this.state.number.split('')
        let polynominal = this.state.polynominal.split('');
        let m = number.length;
        let n = polynominal.length;
        let result = '';
        result = number;
        for (let i = 1; i <= n - 1; i++)
            result.push('0');

        for (let i = 0; i <= result.length - n;) {
            for (let j = 0; j < n; j++)
                result[i + j] = result[i + j] === polynominal[j] ? '0' : '1';
            for (; i < result.length && result[i] !== '1'; i++) ;

        }
        console.log(result)
        this.setState({result: result})
    }

    decalculate() {
        let number = this.state.numberToRelode.split('')
        let polynominal = this.state.polynominalToRelode.split('');
        let m = number.length;
        let n = polynominal.length;
        let result = '';
        result = number;
        for (let i = 0; i <= result.length - n;) {
            for (let j = 0; j < n; j++)
                result[i + j] = result[i + j] === polynominal[j] ? '0' : '1';
            for (; i < result.length && result[i] !== '1'; i++) ;

        }
        console.log(result)
        this.setState({result2: result})
    }

}

export default CRCComponent;