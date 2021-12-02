import {Component} from "react";

class RSAComponent extends Component {

    state = {
        keys: [{}],
        message: '',
        messageToDecode: '',
        textEncoded: [],
        textDecoded: [],
        updatedNumber:'',
        isLoaded: false,
        keyIndex: ''
    }

    render() {
        let keys = <p></p>
        if(this.state.isLoaded) {
            keys =  Object.entries(this.state.keys).map((key, value) => {
            return (
                <>
                <input type="checkbox" id={key[0]} value={key[0]} onClick={(e) => this.setState({keyIndex: e.target.value})}/>
                <label htmlFor="scales">{JSON.stringify(key[1])}</label>
                    <br/>
                </>
            )})
        }
        return (
            <>
                <h1>RSA</h1>
                <button onClick={() => this.fetchKeys()}>Pobierz klucze</button>
                <br/>
                {keys}
                <input placeholder="Wpisz tekst" onChange={(e) => this.setState({message: e.target.value})}/>
                <br/>
                <button onClick={() => this.encodeWithKey()}>Szyfruj</button>
                <br/>
                <p>{this.state.textEncoded}</p>
                <br/>
                <input placeholder="Wpisz tekst" onChange={(e) => this.setState({messageToDecode: e.target.value})}/>
                <button onClick={() => this.decodeWithKey()}>Odkoduj</button>
                <br/>
                <p>{this.state.textDecoded}</p>
            </>
        )
    }

    fetchKeys() {
        fetch('http://localhost:8080/getKeys')
            .then(res => res.json())
            .then(res => this.setState({keys: res, isLoaded:true}))
    }

    encodeWithKey() {
        const data = {
            message: this.state.message,
            keyIndex: this.state.keyIndex,
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...data})
        };
        fetch('http://localhost:8080/encode', requestOptions)
            .then(res => res.json())
            .then(res => this.setState({textEncoded: res}))
    }

    decodeWithKey() {
        const data = {
            message: this.state.messageToDecode,
            keyIndex: this.state.keyIndex,
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...data})
        };
        fetch('http://localhost:8080/decode', requestOptions)
            .then(res => res.json())
            .then(res => this.setState({textDecoded: res}))
    }
}

export default RSAComponent;