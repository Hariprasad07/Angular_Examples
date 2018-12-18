import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  devName:string="hari";
  devName1:String="prasad";

   constructor()
   {
      console.log("invoking constructor");
   } 

  //calculator example
  num1:number=10;
  num2:number=20;
  result:number;

  birds:object=[{"name":"dove","color":"white"},{"name":"dove","color":"white"}];

  sum(n1:number,n2:number){
    this.result=n1+n2;
  }

  add()
  {
    //this.result=this.num1+this.num2; 
    this.sum(this.num1,this.num2);  //this line is calling for sum function
  }

  sub()
  {
    this.result=this.num1-this.num2;
  }

  mul()
  {
    this.result=this.num1*this.num2;
  }

  div()
  {
    this.result=this.num1/this.num2;

  }

}
