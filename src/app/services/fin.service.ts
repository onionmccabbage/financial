import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinService {
  // declare models for this class
  serviceURL = 'https://agez3b6adi.execute-api.eu-west-1.amazonaws.com/default/simplePriceFeed2?ticker=C&num_days=10'

  constructor(private http:HttpClient) { }

  // we need a method to make an http call to the url
  getStocks(){
    // this is an asynchronous call
    return this.http.get(this.serviceURL)
  }
}
