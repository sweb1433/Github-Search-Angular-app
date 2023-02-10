import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userDetail: any = []
  

  constructor() { 

    console.log("inside constructor")
    let local1= localStorage.getItem('l1')
    let local2= localStorage.getItem('l2')
    let local3= localStorage.getItem('l3')
    if(local1){
      this.userDetail.push(JSON.parse(local1))
    }
    if(local2){
      this.userDetail.push(JSON.parse(local2))
    }
    if(local3){
      this.userDetail.push(JSON.parse(local3))
    }

    console.log("printing history array",this.userDetail)
   }

  ngOnInit(): void {
    
  }

  clearHistory(){

    localStorage.removeItem('l1')
    localStorage.removeItem('l2')
    localStorage.removeItem('l3')

    this.userDetail = []


  }

}
