import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent implements OnInit {
  sentiments: JSON;
  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  getSentiments() {
    var textarea = <HTMLInputElement>document.getElementById('textarea');
    var text = textarea.value;
    text = text.replace(/http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/g, '');
    text = text.replace(/[^A-Za-z0-9 ]/g, '');
    this.httpClient
      .get('http://127.0.0.1:1217/sentiment/' + text)
      .subscribe((data) => {
        this.sentiments = data as JSON;
        this.sharedService.sendClickEvent(this.sentiments);
      });
  }
}
