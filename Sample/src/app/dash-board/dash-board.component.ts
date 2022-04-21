import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  showDiv: boolean = false;
  constructor() {}
  TogleNav(){
    this.showDiv = !this.showDiv;
  }

  ngOnInit(): void {
  }

}