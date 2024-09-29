import React, { Component } from 'react';
import firebase from "../../Firebase";

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNascimento: "",
        }
    }

    async componentDidMount() {

        await firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid

                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((retorno) => {
                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            dataNascimento: retorno.data().dataNascimento,
                        });
                    });
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Tela Principal</h1>
                <p>Nome: {this.state.nome}</p>
                <p>Sobrenome: {this.state.sobrenome}</p>
                <p>Data de nascimento: {this.state.dataNascimento}</p>
            </div>
        )
    }
}


export default Principal;