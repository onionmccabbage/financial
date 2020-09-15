import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // models for this class
  code:string = 'IBM'

  constructor() { }

  ngOnInit(): void {
    
  }

}
