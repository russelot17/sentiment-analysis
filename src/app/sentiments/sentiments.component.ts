import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.css'],
})
export class SentimentsComponent implements OnInit {
  clickEventSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.clickEventSubscription = this.sharedService
      .getClickEvent()
      .subscribe((data) => {
        this.displayScores(data);
      });
  }

  ngOnInit(): void {}

  displayScores(sentiments: JSON) {
    var pos = document.getElementById('pos-percentage');
    var neu = document.getElementById('neu-percentage');
    var neg = document.getElementById('neg-percentage');
    pos.innerHTML = (sentiments['pos'] * 100).toFixed(2).toString() + ' %';
    neu.innerHTML = (sentiments['neu'] * 100).toFixed(2).toString() + ' %';
    neg.innerHTML = (sentiments['neg'] * 100).toFixed(2).toString() + ' %';
  }
}
