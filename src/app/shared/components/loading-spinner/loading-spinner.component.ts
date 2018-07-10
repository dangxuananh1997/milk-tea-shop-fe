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
        if (isLoading)
          this.isLoading = isLoading;
        else {
          setTimeout(() => {
            this.isLoading = isLoading;
          }, 500);
        }
      }
    );
  }

}
