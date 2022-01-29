import { ListeReservationView } from "./classes/listeReservations";
import { Reservation } from "./classes/reservation";
import { Appartement } from "./classes/Appartement";
import { soldeView } from "./classes/soldeView";

//déclaration des variables
const btn = document.querySelector('#button') as HTMLButtonElement;
let name = document.querySelector('#name') as HTMLInputElement;
let prenom = document.querySelector('#prenom') as HTMLInputElement;
let nmbr = document.querySelector('#nmbrC') as HTMLInputElement;
let restaurant = document.querySelector('#restaurant') as HTMLInputElement;
let parking = document.querySelector('#parking') as HTMLInputElement;
let menage = document.querySelector('#menage') as HTMLInputElement;

//instanciations des classes
let reservation= new Reservation(0)
let solde1 = new soldeView();
let liste1 = new ListeReservationView()

//souscription 
reservation.subscribe(solde1)
reservation.subscribe(liste1)

//écoute sur le bouton ADD
btn.addEventListener('click', (e: Event) => {
   //éviter la réactualisation de la page
    e.preventDefault();
    // console.log('clicked');
    //condition pour valider une reservation simple
    if(nmbr.valueAsNumber>0 && name.value && prenom.value){

        let appartement1 = new Appartement(50000,name.value,prenom.value,nmbr.valueAsNumber,restaurant.checked,menage.checked,parking.checked);
        reservation.addAppartement(appartement1)
        console.log(reservation.getSolde()); 
    }
    else{
        alert('nombre de participants incorrecte,ou champs non renseignés')
    }
})
