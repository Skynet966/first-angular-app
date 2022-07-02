import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-selector', // element selector
  // selector: '[app-server]', // attribute selector
  selector: '.app-server', // class selector
  template: '<h1>Satish Kumar Yadav</h1>',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
