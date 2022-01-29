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
    subscribe(obs: IObserver) {
        this.observers.push(obs);
        obs.update(this)
        console.log('subscribe');
    }
    unsubscribe(obs: IObserver) {
        let index = this.observers.indexOf(obs)
        this.observers.splice(index, 1)
        console.log(('unsubscribe'));
    }
    notify() {
        this.observers.forEach(obs => obs.update(this))
        console.log('notify');
    }
    addAppartement(unAppartement: Appartement) {
        this.Appartements.push(unAppartement);
        this.solde += unAppartement.prix();
        // console.log('add appartement');
        if(unAppartement.getchoix1()===true){
            let appartementWithResto=new appartementAvecAbonnementResto(unAppartement,6000)
            this.solde+= appartementWithResto.prix()
        }
        if(unAppartement.getchoix2()===true){
            let appartementWithParking=new appartementAvecAbonnementParking(unAppartement,6000)
            this.solde+= appartementWithParking.prix()
        }
        if(unAppartement.getchoix3()===true){
            let appartementWithMenage=new appartementAvecAbonnementServiceMenage(unAppartement,6000)
            this.solde+= appartementWithMenage.prix()
        }
        this.notify()
    }
    getAppartements() {
        return this.Appartements;
    }
    
    getSolde() {
        return this.solde;
    }
    

}