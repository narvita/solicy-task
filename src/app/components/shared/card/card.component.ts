import {Component, Input, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CardService} from '../../../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardNumber!: number;
  public fas = faTimes;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  public deleteCard(value: number): void {
    this.cardService.deleteCard(value);
  }

}
