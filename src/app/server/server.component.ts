import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-server', // class selector
  // selector: '[app-server]', // attribute selector
  selector: 'app-server', // element selector
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  deleteServer: boolean = false;
  serverCreationStatus: string = 'No server was created!!';
  serverName: string = 'XFCR32';
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
      this.deleteServer = true;
    }, 1000);
  }

  onCreateNewServer = () => {
    this.serverCreationStatus =
      this.serverName + ' Server was created successfully!!';
  };

  onUpdateServerName = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;
  };

  ngOnInit(): void {}
}
