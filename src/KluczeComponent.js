import {Component} from "react";

class KluczeComponent extends Component {

    state = {
        generatedKey: {},
        isLoaded: false
    }

    render() {
        let loaded = this.state.isLoaded;
        if(loaded){
            return(
                <>
                    <button onClick={() => this.createRSAKeys()}>Generuj klucze</button>
            <p>Wygenerowany klucz prywatny D: {this.state?.generatedKey?.privateKey?.d}</p>
            <p>Wygenerowany klucz prywatny N: {this.state?.generatedKey?.privateKey?.n}</p>
            <p>Wygenerowany klucz publiczny E: {this.state?.generatedKey?.publicKey?.e}</p>
            <p>Wygenerowany klucz publiczny N: {this.state?.generatedKey?.publicKey?.n}</p>
            <p>Wygenerowany klucz publiczny N: {this.state?.generatedKey?.publicKey?.n}</p>
            <p>Wygenerowany Q: {this.state?.generatedKey?.q}</p>
            <p>Wygenerowany P: {this.state?.generatedKey?.p}</p>
                </>)
        } else
        return (
            <button onClick={() => this.createRSAKeys()}>Generuj klucze</button>
        )
    }

    createRSAKeys() {
        fetch("http://localhost:8080/keyGenerator")
            .then(res => res.json())
            .then(res => this.setState({generatedKey: res, isLoaded: true}));
    }
}
export default KluczeComponent;