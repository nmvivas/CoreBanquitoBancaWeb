import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private sharedData: any = {};

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }
}