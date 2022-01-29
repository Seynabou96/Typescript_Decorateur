import { ListeReservationView } from "./classes/listeReservations";
import { Reservation } from "./classes/reservation";
import { Appartement } from "./classes/Appartement";
import { soldeView } from "./classes/soldeView";

const btn = document.querySelector('#button') as HTMLButtonElement;
let name = document.querySelector('#name') as HTMLInputElement;
let prenom = document.querySelector('#prenom') as HTMLInputElement;
let nmbr = document.querySelector('#nmbrC') as HTMLInputElement;
let restaurant = document.querySelector('#restaurant') as HTMLInputElement;
let parking = document.querySelector('#parking') as HTMLInputElement;
let menage = document.querySelector('#menage') as HTMLInputElement;
let reservation= new Reservation(0)
let solde1 = new soldeView();
let liste1 = new ListeReservationView()
reservation.subscribe(solde1)
reservation.subscribe(liste1)
btn.addEventListener('click', (e: Event) => {
   
    e.preventDefault();
    // console.log('clicked');
    if(nmbr.valueAsNumber>0 && name.value && prenom.value){

        let appartement1 = new Appartement(5000,name.value,prenom.value,nmbr.valueAsNumber,restaurant.checked,menage.checked,parking.checked);
        reservation.addAppartement(appartement1)
        // reservation.getOptions(appartement1)
        console.log(reservation.getSolde()); 
    }
    else{
        alert('nombre de participants incorrecte')
    }
})
