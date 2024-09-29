import React, { Component } from 'react';
import firebase from '../../Firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            mensagem: ""
        }
        this.acessar = this.acessar.bind(this);
    }
    async acessar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href = "./principal";
        })
        .catch((erro) => {
            this.setState({mensagem: 'login/senha inválidos'})
            console.log(erro)
        })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({ email: e.target.value })} />
                <br />
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({ senha: e.target.value })} />
                <br />
                <button onClick={this.acessar}>Acessar</button>
                <p>{this.state.mensagem}</p>
            </div>
        )
    }
}

export default Login;