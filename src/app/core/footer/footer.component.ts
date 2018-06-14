import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright: string;
  year: number;

  constructor() { }

  ngOnInit() {
    this.year = moment().year();
    this.copyright = `${this.year} Andrew Shortall. All rights reserved.`;
  }

}
