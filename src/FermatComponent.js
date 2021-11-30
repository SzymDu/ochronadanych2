import {Component} from "react";

class FermatComponent extends Component {

    state = {
        isValid: "",
        controlNumber: '',
        number: '',
        max: '',
        maxValidation: '',
        numberOfTries: '',
        result: '',
        testedNumbers: [],
    }

    render() {
        const numbers = this.state.testedNumbers.map(x => {
            return <p>{x}</p>
        })
        return (
            <>
                <h1>Fermat test</h1>
                <p>Wartość powinna być wyższa niż 10^9 jeżeli będzie mniejsza zostanie ustawiona wartość domyślna</p>
                <input placeholder="Wpisz numer maksymalny" value={this.state.max}
                       onChange={(e) => {
                           if(e.target.value % 2 ===0) {
                               this.setState({maxValidation:"Numer nieparzysty"})
                           }
                           this.setState({max: e.target.value})
                       }}/>
                <p>{this.state.maxValidation}</p>
                <input placeholder="Wpisz numer lub wylosuj" value={this.state.number}
                       onChange={(e) => this.setState({number:e.target.value})}/>

                <button onClick={(e) => this.generateNumber(e)}>Kliknij by wylosować</button>

                <input placeholder="Wpisz liczbę prób"
                       onChange={(e) => this.setState({numberOfTries: e.target.value})}/>

                <button onClick={(e) => this.fermat(e)}>Test</button>
                {numbers}
                <p>{this.state.result}</p>
            </>
        )
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateNumber(e) {
        let max = this.state.max;
        this.setState({testedNumbers:[]})
        if (!max) {
            max = Math.pow(10, 9);
        }
        let number;
        while (true) {
            let tmp = this.getRandomInt(3, max)
            if (tmp % 2 === 1) {
                number = tmp;
                break;
            }
        }
        this.setState({number: number})
        return number;
        e.preventDefault()
    }

    nwd(a, b){
        let reszta;
        while (b) {
            reszta = a % b;
            a = b;
            b = reszta;
        }
        return a;

    }

    fermat(e) {
        let number = this.state.number;
        let numberToTry = [];
        for (let i = 0; i < this.state.numberOfTries; i++) {
            numberToTry.push(this.getRandomInt(3, number -1))
        }

        this.setState({testedNumbers: numberToTry})
        const isTrue = this.state.testedNumbers.every(toTry => {
            if(this.nwd(toTry, number) > 1){
              return true;
            }
            if((Math.pow(toTry, number -1) % number) !== 1){
              return true;
            }
            return false;
        })
        this.setState({result: !isTrue ? "Liczba jest pierwsza" : "Liczba złożona"});
        console.log(isTrue);
        e.preventDefault()
    }

}
export default FermatComponent;