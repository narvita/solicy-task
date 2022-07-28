import { Component, OnInit } from '@angular/core';
import {CardService} from '../../../../services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  public addCard() {
    this.cardService.generateCard();
  }

  public sortCards() {
    this.cardService.sortCard();
  }

}
