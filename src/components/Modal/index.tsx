import React from "react";
import Utils from '../../Utils/Index'
import links from "../../Routes/API";
import './styles.css'

export function Modal(props: any){
    return(
        <div id="modalDiv">
            <h2>Seja bem vindo!</h2>
            <h4>Por favor digite seu e-mail:</h4>
            <button onClick={Utils.closeModal} id="exitButton">X</button>
            <form>
                <input type="text" id="email" placeholder="Example: teste1@tractian.com" />
            </form>
            <button onClick={props.search} id="searchButton">Pesquisar</button>
        </div>
    )
}
