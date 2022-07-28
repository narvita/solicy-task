import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cardsArr: number[] = JSON.parse(localStorage.getItem("cardsArr") || '{}');

  constructor() { }

  public generateCard(): void {
    let arrayItem = this.generateRandomNumber();
    this.cardsArr.push(arrayItem)
    localStorage.setItem("cardsArr", JSON.stringify(this.cardsArr));
    let num = JSON.parse(localStorage.getItem("cardsArr") || '{}');
  }


  public deleteCard(value: number): void {
    let index =  this.cardsArr.indexOf(value);
    this.cardsArr.splice(index, 1);
    localStorage.setItem("cardsArr", JSON.stringify(this.cardsArr));

  }

  public sortCard(): void{
    this.cardsArr.sort((a, b) => a-b);
    localStorage.setItem("cardsArr", JSON.stringify(this.cardsArr));
  }

  public generateRandomNumber(): number {
    let cardNumber = Math.floor(Math.random() * 1000);
    return cardNumber
  }
}
