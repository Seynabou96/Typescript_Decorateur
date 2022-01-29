import { IObserver } from "../interfaces/IObserver";
import { Reservation } from "./reservation";

export class ListeReservationView implements IObserver {
    private ul: HTMLUListElement;
  
    constructor() {
        this.ul = document.querySelector('.ulListeReservation')
      
    }

    update(state:Reservation) {

        //récupération du tableau d'appartements
        let arrayR = state.getAppartements();

        //initialisation à "vide" de l'ul pour résestituer que les éléments compris dans le tableau
        this.ul.innerHTML=''

        //Application sur chaque élément du tableau
        arrayR.forEach(reservation => {
            let liHtml = document.createElement('li');
            let headHtml = document.createElement('h4');
            let paraHtml = document.createElement('p');
            liHtml.className = 'one'
            headHtml.innerText ='Réservation'
            paraHtml.innerHTML = reservation.setText();
            this.ul.append(liHtml)
            liHtml.append(headHtml)
            liHtml.append(paraHtml)
        })

    }
}