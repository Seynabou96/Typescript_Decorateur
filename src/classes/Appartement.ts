import { IDecorateur } from "../interfaces/IDecorateur";

//classe à décorer
export class Appartement implements IDecorateur {
    //déclaration et initialisation des variables
    public nomPersonne: string;
    public prenomPersonne: string;
    public nombreChambres: number
    public check1: boolean;
    public check2: boolean;
    public check3: boolean;
    public price: number

    constructor(tarif: number, nom: string, prenom: string, nombre: number, resto: boolean, piscine: boolean, sport: boolean) {
        this.nomPersonne = nom;
        this.prenomPersonne = prenom;
        this.nombreChambres = nombre;
        this.check1 = resto;
        this.check2 = piscine;
        this.check3 = sport;
        this.price = tarif * this.nombreChambres;
    }

    //méthode qui retourne le nombre de chambres

    getNombre(): number {
        return this.nombreChambres;
    }

    //les choix cochés

    getchoix1(): boolean {
        return this.check1;
    }
    getchoix2(): boolean {
        return this.check2;
    }
    getchoix3(): boolean {
        return this.check3;
    }

    //le prix d'un appartement

    prix(): number {
        return this.price;
    }

    //le texte a envoyé a la listeView

    setText() {
        return `${this.getName()}, votre réservation a été validé avec les options: <br>
        Abonnement au Restaurant : ${this.check1 ===true ? 'oui, ':'non,'} <br>
        Abonnement au parking : ${this.check2 ===true ? 'oui, ':'non,'} <br>
        Abonnement au service de Ménage : ${this.check3 ===true ? 'oui, ':'non,'}`;
    }

    //une méthode de base du premier exemple

    showDetails() {
        return `Prix total : ${this.prix()} (tarif normaml)`;
    }

    //retourne le nom complet

    getName() {
        return `${this.prenomPersonne} ${this.nomPersonne} `;
    }

   
}