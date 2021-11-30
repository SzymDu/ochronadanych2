import {Component} from "react";

class PeselComponent extends Component {

    state = {
        isValid: ""
    }

    render() {
        return (
            <>
                <h1>Walidator numeru pesel</h1>
                <input placeholder="Wpisz pesel" onChange={(e) => this.isValidPesel(e)}/>
                <p>{this.state.isValid}</p>
            </>
        )
    }

    isValidPesel(e) {
        let pesel = e.target.value;
        let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        let sum = 0;
        let controlNumber = parseInt(pesel.substring(10, 11));

        for (let i = 0; i < weight.length; i++) {
            sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
        }
        sum = sum % 10;
        const isValid = (10 - sum) % 10 === controlNumber;
        if(isValid){
            this.setState({isValid: "Pesel jest prawidłowy"})
        } else {
            this.setState({isValid: "Pesel nieprawidłowy"})
        }

    }
}

export default PeselComponent;