import { IDecorateur } from "../interfaces/IDecorateur";


export class AppartementAvecAbonnement implements IDecorateur {
    public AppartementSimple: IDecorateur;
    tarif: number;
    constructor(appartement: IDecorateur, tarif: number) {
        this.AppartementSimple = appartement;
        this.tarif = tarif;
    }
    getNombre(): number {
        return this.AppartementSimple.getNombre()
    }
    prix(): number {
        return (this.tarif * this.getNombre());
    }
    showDetails() {
        return `${this.AppartementSimple.showDetails()} + ${this.tarif}`;
    }
}

////classes avec Options

export class appartementAvecAbonnementResto extends AppartementAvecAbonnement { }

export class appartementAvecAbonnementParking extends AppartementAvecAbonnement { }

export class appartementAvecAbonnementServiceMenage extends AppartementAvecAbonnement { }
