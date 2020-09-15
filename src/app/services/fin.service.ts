import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinService {
  // declare models for this class
  serviceURL = 'https://agez3b6adi.execute-api.eu-west-1.amazonaws.com/default/simplePriceFeed2?ticker='
  // whichStock = 'C'
  someParams = '&num_days='
  num:number = 10
  mockURL = 'https://json.extendsclass.com/bin'
  APItoken = '73e5ea8a-f416-11ea-8742-0242ac110002'

  constructor(private http:HttpClient) { }

  // we need a method to make an http call to the url
  getStocks(whichStock='IBM', num=this.num){
    // console.log(whichStock)
    // this is an asynchronous call - conaternate the parameters to make a URL
    let fullURL = `${this.serviceURL}${whichStock}${this.someParams}${num}`
    return this.http.get(fullURL) // this is an Observable
  }

  // make a POST to an API end-point
  doPOST(data){
    // we can configure http options such as headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:this.APItoken
      })
    }
    return this.http.post(this.mockURL, data, httpOptions)
  }
}
