import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinService {
  // declare models for this class
  serviceURL = 'https://agez3b6adi.execute-api.eu-west-1.amazonaws.com/default/simplePriceFeed2?ticker='
  // whichStock = 'C'
  someParams = '&num_days='
  num:number = 10

  constructor(private http:HttpClient) { }

  // we need a method to make an http call to the url
  getStocks(whichStock='IBM', num=this.num){
    // console.log(whichStock)
    // this is an asynchronous call - conaternate the parameters to make a URL
    let fullURL = `${this.serviceURL}${whichStock}${this.someParams}${num}`
    return this.http.get(fullURL) // this is an Observable
  }
}
