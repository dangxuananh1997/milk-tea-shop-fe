import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalVariablesService {
  enableLoadingSpinner: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }
}
