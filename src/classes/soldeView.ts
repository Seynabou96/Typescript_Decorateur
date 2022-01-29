import { IObserver } from "../interfaces/IObserver"
import { Reservation } from "./reservation"

export class soldeView implements IObserver {
    private div: HTMLDivElement

    constructor() {
        this.div = document.querySelector('#solde')

    }

    update(state: Reservation) {
        //récuparation de la solde totale
        let solde = state.getSolde();
        //insertion au niveau de la div concernée
        this.div.innerHTML = `
        <h2>Notre Chiffre d'Affaires</h2>
        <span id="strongest">${solde.toString()}</span>
        `;
        console.log('update: ', solde);
    }
}