import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  exports: [RouterModule]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
