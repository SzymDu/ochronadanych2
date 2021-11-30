import {Component} from "react";

class PeselComponent extends Component {

    state = {
        isValid: "",
        controlNumber: '',
        updatedNumber:''
    }

    render() {
        return (
            <>
                <h1>Walidator Luhna</h1>
                <input placeholder="Wpisz numer" onChange={(e) => this.calculateNumber(e)}/>
                <p>Liczba kontrolna to: {this.state.controlNumber}</p>
                <p>Zaktualizowany input : {this.state.updatedNumber}</p>
                <input placeholder="Wpisz numer do walidacji" onChange={(e) => this.validateNumber(e)}/>
                <p> {this.state.isValid}</p>
            </>
        )
    }

    calculateNumber(e) {
        let input = e.target.value;
        if(input){

        let splittedInput = input.split("");
        let sum = 0;
        let number;
        for(let i =0; i < splittedInput.length; i++) {
            let tmp = parseInt(splittedInput[i]);
            if(i % 2 === 0){
                tmp *=2;
                if(tmp > 9){
                    tmp -=9;
                }
            }
            sum +=tmp;
        }
        for(let j =0; j<10; j++){
            if((sum + j) % 10 === 0){
                number = j;
                break;
            }
        }
        console.log(number)
        input = input + '-' + number;
        this.setState({controlNumber:number, updatedNumber: input})
        }
        else {
            this.setState({controlNumber:'', updatedNumber: ''})
        }
    }

    validateNumber(e) {
        let input = e.target.value;
        let inputWithoutSign = input.replaceAll('-', '');
        let splittedInput = inputWithoutSign.split("");
        let sum = 0;
        for (let i = splittedInput.length-1; i >=0; i--) {
            let tmp = parseInt(splittedInput[i]);
            if (i % 2 === 0) {
                tmp *= 2;
                if (tmp > 9) {
                    tmp -= 9;
                }
            }
            sum += tmp;
        }
        if (sum % 10 === 0)
            return this.setState({isValid:"Liczba jest poprawna"})
        else
            return this.setState({isValid:"Liczba jest niepoprawna"})
    }
}

export default PeselComponent;