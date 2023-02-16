import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personData:Array<any>=[];
  constructor(private ApiService:ApiService) {
    this.ApiService.getAllPersons().subscribe(
    (responce)=>{
    this.personData=responce;
    })
   }

  ngOnInit(): void {
  }
  logout(){localStorage.clear()}

}
