import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'financial';
  hiddenFlag:boolean = false
  username:string = ''

  doAgree(){
    this.title = 'agree'
    this.hiddenFlag = true
    this.username = 'has agreed'
  }

}
