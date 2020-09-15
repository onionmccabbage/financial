import { Component, OnInit } from '@angular/core';
import { FinService } from '../services/fin.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // models for this class
  code:string = 'IBM'
  // some mock data (to satisfy typescript)
  data:any = {"ticker": "C", "price_data": [{"date": "2020-08-31", "price": 51.119998931884766}]}
  num:number = 5

  constructor(private myFinService:FinService) { }

  // button handler method
  getDataFromCode(){
    // console.log('get from code')
    this.myFinService.getStocks(this.code, this.num)
    .subscribe( (response)=>{this.data = response} )
  }

  ngOnInit(): void {
    // when this component loads, run this call to an Observable method
    this.getDataFromCode()
    // also call our mock POST service
    this.myFinService.doPOST([{name:'Ada'}])
      .subscribe( (r)=>{console.log(r)} )

  }

}
