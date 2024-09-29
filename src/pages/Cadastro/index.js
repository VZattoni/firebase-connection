import React, { Component } from 'react';
import firebase from '../../Firebase';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
            dataNascimento: "",
            mensagem: ""
        }
        this.gravar = this.gravar.bind(this);
    }

    gravar() {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then((r) => {
            firebase.firestore().collection("usuario").doc(r.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                email: this.state.email,
                senha: this.state.senha,
                dataNascimento: this.state.dataNascimento,
            });
            this.setState({mensagem: "Conta criada com sucesso!"})
        }).catch((error) => {
            this.setState({mensagem: error.message})
        });

    }



    render() {
        return (
            <div>
                <h1>Página de Cadastro</h1>
                <input type="text" placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} />
                <br />
                <input type="text" placeholder='Senha' onChange={(e) => this.setState({ senha: e.target.value })} />
                <br />
                <input type="text" placeholder='Nome' onChange={(e) => this.setState({ nome: e.target.value })} />
                <br />
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({ sobrenome: e.target.value })} />
                <br />
                <input type="text" placeholder='Data de nascimento' onChange={(e) => this.setState({ dataNascimento: e.target.value })} />
                <br />
                <button onClick={this.gravar}>Gravar</button>
                <p>{this.state.mensagem}</p>
            </div>

        )
    }
}
export default Cadastro;