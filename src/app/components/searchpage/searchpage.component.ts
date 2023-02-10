import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
     searchform : FormGroup;
     closeResult = '';

     userDetail : any;


    constructor(private route : Router, private githubService :GithubService, private modalService: NgbModal) { } 
    ngOnInit(): void {
        this.searchform = new FormGroup({
             username : new FormControl(
               null,
               [Validators.required]
             )
        })

    }

    searchUser(){
       console.log(this.searchform.value);
       const username = this.searchform.value.username;

       this.githubService.getUser(username).subscribe({
        complete : () => {console.log("success!")},
        error:() => {
           alert("error ! search again");         
        },
        next : (data : any = []) => {
          console.log("Search Result is: ",data)
          this.userDetail = data; 
          let searchData= {
            keyword : username,
            image : data?.avatar_url,
            name : data?.name,
            searchedOn : new Date()
          }
          this.saveDataToLocalstorage(searchData)
         }

      })       
    }

    saveDataToLocalstorage(obj:any){
      let local1= localStorage.getItem('l1')
      let local2= localStorage.getItem('l2')
      let local3= localStorage.getItem('l3')

      if(!local1){
        console.log("l1 is not present")
        localStorage.setItem('l1', JSON.stringify(obj));
      }
      else if(!local2){
        console.log("l2 is not present")
        localStorage.setItem('l2', JSON.stringify(obj));

      }
      else if(!local3){
        console.log("l3 is not present")
        localStorage.setItem('l3', JSON.stringify(obj));

      }
      else{

        let temp = local3;

        localStorage.setItem('l3', JSON.stringify(obj));      
        localStorage.setItem('l1', local2);
        localStorage.setItem('l2', temp);
      }


      // localStorage.setItem('searchHistory', JSON.stringify(obj));
    }

    open(content: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

}