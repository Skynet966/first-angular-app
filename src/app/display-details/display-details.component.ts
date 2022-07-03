import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  timestampLogs: { status: boolean; timestamp: string }[] = [];
  userDetails: string = 'My name is Satish Yadav';
  isDetailsVisible: boolean = false;

  toggleDisplayVisibility() {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.timestampLogs.push({
      status: this.isDetailsVisible,
      timestamp: new Date().toLocaleString(),
    });
  }

  isEnoughLogs(): boolean {
    return this.timestampLogs.length >= 5;
  }
}
