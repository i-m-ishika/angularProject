import { Component,OnInit} from "@angular/core";
import * as Rx from 'rxjs';
import { StarWarsService } from "../services/starWars.service";
@Component({
  templateUrl:'starWars.component.html',
  styleUrls:['starWars.component.css']
})
export class StarWarsComponent implements OnInit{
  persons:string[];
  isFetching=false;
  constructor(private _swservice:StarWarsService){ }

  ngOnInit(){

  }
  loadData(){
    this.isFetching = true;
    this._swservice.fetchPersons()
    .subscribe((characterList)=>{
      this.isFetching = false;
      this.persons = characterList;
    });

  }


}
