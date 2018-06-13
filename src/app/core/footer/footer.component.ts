import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright: string;

  constructor() { }

  ngOnInit() {
    this.copyright = 'Andrew Shortall. All rights reserved.';
  }

}
