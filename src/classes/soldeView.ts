import { IObserver } from "../interfaces/IObserver"
import { Reservation } from "./reservation"

export class soldeView implements IObserver {
    private div:HTMLDivElement
    
    constructor() {
        this.div = document.querySelector('#solde')
      
    }

    update(state:Reservation){
        let solde = state.getSolde();
        this.div.innerHTML=solde.toString();
        console.log('update: ',solde);
    }
}