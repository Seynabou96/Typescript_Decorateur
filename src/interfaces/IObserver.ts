import { Reservation } from "../classes/reservation";

export interface IObserver {
   update(state:Reservation)
  }