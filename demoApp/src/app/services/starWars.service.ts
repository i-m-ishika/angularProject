import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable()
export class StarWarsService{

  private url="https://swapi.dev/api/people/";
  constructor(private _http:HttpClient){ }

  fetchPersons():Observable<string[]>{

    return this._http.get(this.url)
    .pipe(
      map(response=>{
        return response.results.map(
          character=>character.name
        )
      })

    );

  }

}
