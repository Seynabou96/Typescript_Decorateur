import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";
import { Appartement } from "./Appartement";
import { appartementAvecAbonnementParking, appartementAvecAbonnementResto, appartementAvecAbonnementServiceMenage } from "./AppartementAvecAbonnement";

export class Reservation implements ISubject {
    private solde: number;
    private Appartements: Appartement[] = [];
    private observers: IObserver[] = [];
   
    constructor(prix:number) {
        this.solde=prix;

    }
    //enregistrer un Observateur
    subscribe(obs: IObserver) {
        this.observers.push(obs);
        obs.update(this)
        console.log('subscribe');
    }

    //annuler l'enregistrement d'un Observateur 
    unsubscribe(obs: IObserver) {
        let index = this.observers.indexOf(obs)
        this.observers.splice(index, 1)
        console.log(('unsubscribe'));
    }
    //le notifier
    notify() {
        this.observers.forEach(obs => obs.update(this))
        console.log('notify');
    }

    //ajout d'un appartement au tableau d'Appartements avec le calcul de la solde en se basant
    //sur le prix normal et celui des extras.
    addAppartement(unAppartement: Appartement) {
        this.Appartements.push(unAppartement);
        this.solde += unAppartement.prix();
        // console.log('add appartement');
        if(unAppartement.getchoix1()===true){
            let appartementWithResto=new appartementAvecAbonnementResto(unAppartement,150000)
            this.solde+= appartementWithResto.prix()
        }
        if(unAppartement.getchoix2()===true){
            let appartementWithParking=new appartementAvecAbonnementParking(unAppartement,100000)
            this.solde+= appartementWithParking.prix()
        }
        if(unAppartement.getchoix3()===true){
            let appartementWithMenage=new appartementAvecAbonnementServiceMenage(unAppartement,125000)
            this.solde+= appartementWithMenage.prix()
        }
        this.notify()
    }

    //retourne le tableau d'appartements
    getAppartements() {
        return this.Appartements;
    }
    
    //retourne la solde totale
    getSolde() {
        return this.solde;
    }
    

}