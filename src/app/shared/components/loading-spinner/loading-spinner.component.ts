import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../services/global-variables.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading: boolean = false;

  constructor(public globalVariables: GlobalVariablesService) { }

  ngOnInit() {
    this.globalVariables.enableLoadingSpinner.subscribe(
      (isLoading) => {
        setTimeout(() => {
          this.isLoading = isLoading;
        }, isLoading ? 0 : 500);
      }
    );
  }

}
