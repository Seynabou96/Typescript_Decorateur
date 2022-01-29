import { IDecorateur } from "../interfaces/IDecorateur";

//classe des Abonnements comme Options
export class AppartementAvecAbonnement implements IDecorateur {
    public AppartementSimple: IDecorateur;
    tarif: number;
    constructor(appartement: IDecorateur, tarif: number) {
        this.AppartementSimple = appartement;
        this.tarif = tarif;
    }

    //retourne le nombre d'appartements
    getNombre(): number {
        return this.AppartementSimple.getNombre()
    }

    //retourne le prix de l'abonnement uniquement
    prix(): number {
        return (this.tarif * this.getNombre());
    }

    //methode de base
    showDetails() {
        return `${this.AppartementSimple.showDetails()} + ${this.tarif}`;
    }
}

////classes avec Options

export class appartementAvecAbonnementResto extends AppartementAvecAbonnement { }

export class appartementAvecAbonnementParking extends AppartementAvecAbonnement { }

export class appartementAvecAbonnementServiceMenage extends AppartementAvecAbonnement { }
