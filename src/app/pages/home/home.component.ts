import { Component, OnInit } from '@angular/core';
import {CardService} from '../../../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cards: any[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.cardsArr;
  }

}
